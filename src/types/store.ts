export interface StoreSettings {
  key: string;
  name: string;
  value: string;
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
  store_settings: StoreSettings[];
  store_languages: StoreLanguage[];
  store_contacts: StoreContact[];
  store_policies: StorePolicy[];
}
