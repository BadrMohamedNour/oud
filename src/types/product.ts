export type PackagingUnit = {
  id: number;
  name: string;
  product_id: number;
  price: string;
  on_sale: boolean;
  active_sale_price: string;
  quantity: number;
  image: string | null;
};

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  on_sale: boolean;
  active_sale_price: number;
  quantity: number;
  feature_image: string;
  is_featured: boolean;
  is_new: boolean;
  category: {
    id: number;
    name: string;
    description: string;
    slug: string;
    parent_id: number | null;
    parent_name: string | null;
    image_url: string | null;
    meta: {
      title: string | null;
      description: string | null;
      canonical_url: string;
      image_url: string | null;
    };
  };
  tags: string[];
  gallery: string[];
  packaging_units: PackagingUnit[];
  meta_title: string;
  meta_description: string | null;
  meta_keywords: string | null;
  canonical_url: string;
  meta_image: string;
  in_stock: boolean;
  highlighted_name: string | null;
  highlighted_description: string | null;
  similar_products: {
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
  }[];
}

export type Placement =
  | "topRight"
  | "topLeft"
  | "top"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | undefined;
