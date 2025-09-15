interface StoreSetting {
  key: string;
  value: string;
  shown_name: string;
}

interface StoreSettings {
  store_name: StoreSetting;
  store_phone: StoreSetting;
  store_email: StoreSetting;
  company_logo: StoreSetting;
  favicon: StoreSetting;
  commercial_registration_number: StoreSetting;
  tax_number: StoreSetting;
  store_address: StoreSetting;
  cod_fee: StoreSetting;
  cart_guest_retention_days: StoreSetting;
}

interface StoreLanguage {
  slug: string;
  name: string;
  status: string;
  is_default: number;
  direction: string;
  icon: string;
}

export interface StoreContact {
  key: string;
  name: string;
  value: string;
}

interface StorePolicy {
  key: string;
  name: string;
  value: string;
}

export interface StoreData {
  cart_token: string | null;
  store_settings: StoreSettings;
  store_languages: StoreLanguage[];
  store_contacts: StoreContact[];
  store_policies: StorePolicy[];
}
