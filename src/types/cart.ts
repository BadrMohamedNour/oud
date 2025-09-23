interface Tag {
  id: number
  name: string
}

interface Meta {
  title: string | null
  description: string | null
  canonical_url: string
  image_url: string | null
}

interface Category {
  id: number
  name: string
  description: string
  slug: string
  parent_id: number | null
  parent_name: string | null
  image_url: string | null
  meta: Meta
}

export type PackagingUnit = {
  id: number
  name: string
  product_id: number
  price: string
  on_sale: boolean
  active_sale_price: string
  quantity: number
  image: string | null
}

interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  on_sale: boolean
  active_sale_price: number
  quantity: number
  feature_image: string
  is_featured: boolean
  is_new: boolean
  category: Category
  tags: Tag[]
  packaging_units: PackagingUnit[]
  meta_title: string
  meta_description: string | null
  meta_keywords: string | null
  canonical_url: string
  meta_image: string
  in_stock: boolean
  highlighted_name: string | null
  highlighted_description: string | null
}

export interface ProductItem {
  id: number
  product: Product
  packaging_unit: PackagingUnit[] | null
  quantity: number
  unit_price: number
  total_price: number
}

export interface Cart {
  cart_token: string
  items: Product[]
  items_count: number
  total_amount: number
}
