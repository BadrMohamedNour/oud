type Banner = {
  id: string;
  title: string;
  image: string;
  link: string;
};

export type Banners = Banner[];

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  active_sale_price: number | null;
  feature_image: string;
  meta_title: string;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string;
  meta_image: string;
};

export type Products = {
  most_seller: Product[];
  new: Product[];
  feature: Product[];
};

export interface IndexComponentProps {
  banners: { hero: Banners; bottom: Banners; sidebar: Banners };
  products: Products;
}
