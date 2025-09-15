interface Meta {
  title: string | null;
  description: string | null;
  canonical_url: string;
  image_url: string | null;
}

interface Category {
  id: number;
  name: string;
  description: string;
  slug: string;
  parent_id: number | null;
  parent_name: string | null;
  image_url: string | null;
  meta: Meta;
  children: Category[];
}

export interface Categories {
  active_categories: Category[];
  countries_active_products: Category[];
}
