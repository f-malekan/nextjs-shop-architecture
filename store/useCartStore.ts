import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { shoppingCartItemType, AddedProductType, CartStoreType } from "@/types";

const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: AddedProductType) =>
        set((state: CartStoreType) => {
          const existingItem = state.items.find(
            (item: shoppingCartItemType) => item.variantId === product.variantId,
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.variantId === product.variantId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),

      removeItem: (variantId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.variantId === variantId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      removeCompletely: (variantId) =>
        set((state: CartStoreType) => ({
          items: state.items.filter((item) => item.variantId !== variantId),
        })),

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "shopping-cart",
    },
  ),
);

export default useCartStore;
