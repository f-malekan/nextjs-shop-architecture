"use client";

import useCartStore from "@/store/useCartStore";
import PaymentButton from "./PaymentButton";
import EmptyState from "../CommonComponents/EmptyState";
import Image from "next/image";

const ShoppingCart = () => {
  const { items, getTotalPrice } = useCartStore();
  const shipping = 120000;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 ">
        <h1 className="hidden">سبد خرید</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl md:border border-gray-100  md:p-6 md:shadow-sm">
              <div className="overflow-x-auto text-gray-10">
                <table className="w-full ">
                  <thead>
                    <tr className="hidden md:table-row">
                      <th className="px-6 py-4">محصول</th>
                      <th className="px-6 py-4 ">قیمت</th>
                      <th className="px-6 py-4">تعداد</th>
                      <th className="px-6 py-4">جمع کل</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr
                        key={item.variantId}
                        className="hover:bg-gray-50/70 transition-colors"
                      >
                        <td className="p-1 md:p-4 flex gap-2">
                          <Image
                            src={item.image}
                            width={84}
                            height={84}
                            alt={item.name}
                            className="w-21 h-21 object-cover rounded"
                          />
                          <div>
                            <div className="mb-2 text-sm">{item.name}</div>
                            <div className="flex text-sm gap-2 items-center">
                              <span>رنگ:</span>
                              <div
                                style={{
                                  backgroundColor:
                                    item.selectedVariant?.color?.hexCode,
                                }}
                                className="w-3 h-3 md:h-5 md:w-5 rounded md:mb-2"
                              />{" "}
                            </div>

                            <div className="text-sm">
                              سایز: {item.selectedVariant?.size?.name}
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 hidden md:table-cell">
                          {item.price} تومان
                        </td>

                        <td className=" hidden md:table-cell px-6 py-4">
                          <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-gray-100 px-3 py-1 ">
                            {item.quantity}
                          </span>
                        </td>

                        <td className="p-2 md:px-6 md:py-4 text-sm">
                          <span>{item.price * item.quantity} تومان</span>
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
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-3xl md:border border-gray-100 md:p-6 md:shadow-sm text-gray-10 text-sm">
                <p className="py-3 mb-3 border-b border-gray-4">
                  جزئیات پرداخت
                </p>

                <div className="space-y-4 ">
                  <div className="flex items-center justify-between">
                    <span>قیمت کل</span>
                    <span>{getTotalPrice()}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium ">تعداد</span>
                    <span>{items.length} عدد</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>هزینه ارسال</span>
                    <span>{shipping}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <span>مبلغ قابل پرداخت</span>
                    <span>{getTotalPrice() + shipping}</span>
                  </div>
                </div>
                <p className="border-t border-gray-4 text-sm text-gray-10 pt-4 mb-6">
                  کالاهای موجود در سبد شما رزرو و ثبت نشده اند. برای ثبت سفارش
                  مراحل بعدی را تکمیل کنید.
                </p>
                <PaymentButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
