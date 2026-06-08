export interface Color {
  id: string;
  name: string;
}

export interface Size {
  id: string;
  name: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  colorId: string;
  sizeId: string;
  color: Color;
  size: Size;
  stock: number;
  sku: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  variants?: ProductVariant[];
}

export interface shoppingCartItemType {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

export interface AddedProductType {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  selectedVariant?: ProductVariant;
}

export interface CartStoreType {
  items: shoppingCartItemType[];
  addItem: (product: AddedProductType) => void;
  removeItem: (variantId: string) => void;
  removeCompletely: (variantId: string) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  products?: Product[];
  createdAt: Date;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  password: string;
  // accounts: Account[]
  // sessions: Session[]
  // orders:   Order[]
}

export type ActionResultType<T = void> = {
  success: boolean;
  data?: T; 
  message?: string;
};


export interface OrderType {
    id: string;
    userId: string;
    totalAmount: number;
    status: OrderStatus ;
    createdAt :Date;
    updatedAt :Date;
    items?: OrderItemType[]
    }

  export enum OrderStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
  }
  
  export interface OrderItemType {
    id: string;
  
    orderId: string;
    order: OrderType;
  
    productId: string;
    product: Product;
  
    variantId: string;
    variant: ProductVariant;
  
    quantity: number;
  
    price: number; 
  }
  