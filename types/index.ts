export interface Color {
  id: string;
  name: string;
  hexCode: string;
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
  stock: number;
  sku: string;
  createdAt: Date;
  updatedAt: Date;

  color?: Color;
  size?: Size;
  product?: Product;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  image: string;

  price: number;
  discountPercent?: number | null;

  categoryId: string;
  category?: CategoryType;

  createdAt: Date;
  updatedAt: Date;

  variants?: ProductVariant[];
}

export interface ShoppingCartItemType {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  size: string;

  price: number;
  quantity: number;

  selectedVariant?: ProductVariant;
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
  items: ShoppingCartItemType[];

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
  phone: string;
  phoneVerified: Date;
  image: string;
  password: string;

  orders?: OrderType[];
  addresses?: AddressType[];
}


export type ActionResultType<
  TData = never,
  TErrors = Record<string, string[]>
> = {
  success: boolean;
  message?: string | null;
  data?: TData;
  errors?: TErrors;
};

export enum OrderStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export interface AddressType {
  id: string;
  title: string;
  receiverName?: string | null;
  phoneNumber?: string | null;
  province: string;
  city: string;
  fullAddress: string;
  postalCode: string;

  isDefault?: boolean;
  isDeleted: boolean;

  userId: string;
}

export interface OrderType {
  id: string;

  userId: string;

  totalAmount: number;
  totalDiscount: number;
  shippingCost: number;

  status: OrderStatus;

  createdAt: Date;
  updatedAt: Date;

  items?: OrderItemType[];

  addressId?: string | null;
  address?: AddressType | null;

  shippingReceiverName: string;
  shippingPhone: string;
  shippingProvince: string;
  shippingCity: string;
  shippingAddress: string;
  shippingPostalCode: string;
}

export interface OrderItemType {
  id: string;

  orderId: string;
  order?: OrderType;

  productId: string;
  product?: Product;

  variantId: string;
  variant: ProductVariant;

  quantity: number;

  price: number;
  discount: number;
}
