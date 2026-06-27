"use client";

import type { OrderItemType } from "@/types";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useState } from "react";
import BaseButton from "../BaseComponents/BaseButton";
import BaseButtonSheet from "../BaseComponents/BaseBottomSheet";

interface Props {
  items: OrderItemType[];
  totalAmount: number;
}

const OrderItemsTable = ({ items, totalAmount }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fa-IR").format(value);
  };

  return (
    <>
      {/* دکمه کنترل (مشترک) */}
      <BaseButton
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
      >
        <h3 className="flex items-center gap-2 text-base font-medium text-gray-11">
          {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          جزئیات سفارش
        </h3>
      </BaseButton>

      {/* --- نمای دسکتاپ: به صورت Collapse زیر دکمه --- */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-500 ${isOpen ? "max-h-250 mt-4" : "max-h-0"}`}
      >
        <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
          <table className="w-full text-right text-sm">
            <thead className="bg-gray-50 text-gray-400">
              <tr>
                <th className="py-3 px-6 font-normal">عنوان کالا</th>
                <th className="py-3 px-6 font-normal text-center">تعداد</th>
                <th className="py-3 px-6 font-normal text-center">قیمت</th>
                <th className="py-3 px-6 font-normal text-left">مبلغ کل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {items?.map((item) => (
                <tr key={item.id}>
                  <td className="py-4 px-6 text-gray-800">
                    {item.product?.name}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {formatCurrency(item.quantity)} عدد
                  </td>
                  <td className="py-4 px-6 text-center">
                    {formatCurrency(item.price)} تومان
                  </td>
                  <td className="py-4 px-6 text-left font-medium">
                    {formatCurrency(item.price * item.quantity)} تومان
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BaseButtonSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-4 mb-6 max-h-[30vh] overflow-y-auto">
          {items?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start text-sm"
            >
              <span className="text-gray-800">
                {item.product?.name}{" "}
                <span className="text-gray-400 text-xs">
                  (x{item.quantity})
                </span>
              </span>
              <span className="text-gray-900 font-medium">
                {formatCurrency(item.price * item.quantity)} تومان
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">تخفیف</span>
            <span className="text-red-500">0 تومان-</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">هزینه ارسال</span>
            <span className="text-gray-800">120000 تومان</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-50">
            <span className="text-gray-900">مبلغ پرداخت شده</span>
            <span className="text-gray-900">
              {formatCurrency(totalAmount)} تومان
            </span>
          </div>
        </div>
      </BaseButtonSheet>
    </>
  );
};

export default OrderItemsTable;
