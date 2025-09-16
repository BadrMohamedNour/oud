import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  formDataReg: {
    include: 'domains'
  },
  apiErrors: [],
  apiErrorsStep1: [],
  current: 0,
  existsDomainLoading: false,
  existsDomain: false,
  loadingCheckEmail: false,
  salesVolume: [],
  loadingSalesVolumes: false,
  businessCategories: [],
  loadingBusinessCategories: false,
  isModalVisibleReg: false,
  existsCodeLoading: false,
  existsCode: true
}

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post('/register', payload)
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const checkDomainThunk = createAsyncThunk(
  'auth/register/checkDomainThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(`/check_domain`, {
        params: { domain: `${payload}` }
      })
      return data.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const checkEmailThunk = createAsyncThunk(
  'auth/register/checkEmailThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post(`/checkEmail`, { email: payload })
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const checkIdentifierCodeThunk = createAsyncThunk(
  'auth/register/check_identifier_codeThunk',
  async payload => {
    const data = await axios.get(`/check_identifier_code`, {
      params: {
        identifier_code: payload
      }
    })
    return data.data
  }
)

export const getSalesVolumesThunk = createAsyncThunk(
  'auth/register/getSalesVolumesThunk',
  async () => {
    const data = await axios.get(`/salesVolumes`)
    return data.data
  }
)

export const getBusinessCategoriesThunk = createAsyncThunk(
  'auth/register/getBusinessCategoriesThunk',
  async () => {
    const data = await axios.get(`/businessCategories`)
    return data.data
  }
)

export const registerSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    setFormDataReg: (state, action) => {
      state.formDataReg = {
        ...state.formDataReg,
        [action.payload.item]: action.payload.value
      }
    },

    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setIsModalVisibleReg: (state, action) => {
      state.isModalVisibleReg = action.payload
    },

    setExistsCode: (state, action) => {
      state.existsCode = action.payload
    }
  },
  extraReducers: {
    [registerThunk.pending]: state => {
      state.loading = true
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.data = action?.payload
      state.loading = false
    },
    [registerThunk.rejected]: (state, action) => {
      state.apiErrors = action.payload
      state.loading = false
    },

    // checkDomainThunk
    [checkDomainThunk.pending]: state => {
      state.existsDomainLoading = true
    },
    [checkDomainThunk.fulfilled]: (state, action) => {
      state.existsDomain = action?.payload?.exists
      state.existsDomainLoading = false
    },
    [checkDomainThunk.rejected]: (state, action) => {
      state.apiErrorsStep1 = action.payload
      state.existsDomainLoading = false
    },

    // checkEmailThunk
    [checkEmailThunk.pending]: state => {
      state.loadingCheckEmail = true
    },
    [checkEmailThunk.fulfilled]: (state, action) => {
      state.loadingCheckEmail = false
    },
    [checkEmailThunk.rejected]: (state, action) => {
      state.loadingCheckEmail = false
    },

    // checkIdentifierCode
    [checkIdentifierCodeThunk.pending]: state => {
      state.existsCodeLoading = true
    },
    [checkIdentifierCodeThunk.fulfilled]: (state, action) => {
      state.existsCode = action?.payload?.exists
      state.existsCodeLoading = false
    },
    [checkIdentifierCodeThunk.rejected]: (state, action) => {
      state.apiErrorsStep3 = action.payload
      state.existsCodeLoading = false
    },

    // getSalesVolumesThunk
    [getSalesVolumesThunk.pending]: state => {
      state.loadingSalesVolumes = true
    },
    [getSalesVolumesThunk.fulfilled]: (state, action) => {
      state.salesVolume = action.payload?.sales_volume
      state.loadingSalesVolumes = false
    },

    // getBusinessCategoriesThunk
    [getBusinessCategoriesThunk.pending]: state => {
      state.loadingBusinessCategories = true
    },
    [getBusinessCategoriesThunk.fulfilled]: (state, action) => {
      state.businessCategories = action.payload?.businessCategories
      state.loadingBusinessCategories = false
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  setFormDataReg,
  setCurrent,
  setIsModalVisibleReg,
  setExistsCode
} = registerSlice.actions

export default registerSlice.reducer
