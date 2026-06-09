"use client";

import useCartStore from "@/store/useCartStore";
import PaymentButton from "./PaymentButton";
import EmptyState from "../CommonComponents/EmptyState";

const ShoppingCart = () => {
  const { items, getTotalPrice } = useCartStore();
  const shipping = 120000;

  return (
    <div className="dir-rtl min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-6 text-xl md:text-2xl font-bold text-gray-900">
          سبد خرید
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <p className="font-semibold text-gray-900">محصولات</p>
                <p className="text-sm text-gray-500">{items.length} آیتم</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr className="border-b border-gray-100">
                      <th className="px-6 py-4 text-right font-semibold">
                        محصول
                      </th>
                      <th className="px-6 py-4 text-right font-semibold">
                        قیمت
                      </th>
                      <th className="px-6 py-4 text-right font-semibold">
                        تعداد
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        قیمت کل
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">رنگ</th>
                      <th className="px-6 py-4 text-left font-semibold">
                        سایز
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr
                        key={item.variantId}
                        className="hover:bg-gray-50/70 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-gray-900">
                              {item.name}
                            </span>
                            <span className="mt-1 text-xs text-gray-500">
                              کد: {item.variantId}
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-gray-700">
                          {item.price}
                        </td>

                        <td className="px-6 py-4">
                          <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-gray-100 px-3 py-1 text-gray-800">
                            {item.quantity}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-left">
                          <span className="font-semibold text-gray-900">
                            {item.price * item.quantity}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-left">
                          <span className="font-semibold text-gray-900">
                            {item.color}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-left">
                          <span className="font-semibold text-gray-900">
                            {item.size}
                          </span>
                        </td>
                      </tr>
                    ))}

                    {items.length === 0 && (
                      <tr>
                        <td colSpan={6}>
                          <EmptyState
                            variant="compact"
                            title="سبد خرید خالی است"
                            description="محصولی به سبد اضافه نکردی."
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-gray-100 px-5 py-4">
                <p className="text-xs text-gray-500">
                  قیمت‌ها به تومان نمایش داده می‌شوند.
                </p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-base font-bold text-gray-900">
                  خلاصه سفارش
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">قیمت کل</span>
                    <span className="font-semibold text-gray-900">
                      {getTotalPrice()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">حمل و نقل</span>
                    <span className="font-semibold text-gray-900">
                      {shipping}
                    </span>
                  </div>

                  <div className="my-3 h-px bg-gray-100" />

                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-semibold">مجموع</span>
                    <span className="text-gray-900 font-extrabold">
                      {getTotalPrice() + shipping}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  پرداخت
                </p>
                <PaymentButton />
                <p className="mt-3 text-xs text-gray-500 leading-5">
                  با کلیک روی پرداخت، به درگاه بانکی منتقل می‌شوید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
