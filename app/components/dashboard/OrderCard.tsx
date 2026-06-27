import { OrderType } from "@/types";
import OrderItemsTable from "./OrderItemsTable";
import {
  IoWalletOutline,
  IoPricetagOutline,
  IoCarOutline,
  IoLocationOutline,
  IoCalendarOutline,
} from "react-icons/io5";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value);

const OrderCard = ({ order }: { order: OrderType }) => {
  return (
    <div className="rounded-2xl border border-gray-4 bg-white p-5">
      {/* Summary */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-2 px-3 py-1 text-sm text-gray-10">
            {order.status}
          </span>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
            ارسال با پیک
          </span>
        </div>

        <div className="text-sm text-gray-10">
          آخرین بروزرسانی:{" "}
          {new Intl.DateTimeFormat("fa-IR", { timeStyle: "short" }).format(
            new Date(order.updatedAt),
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-gray-11 md:grid-cols-3">
        <div className="flex items-center gap-2">
          <IoWalletOutline className="text-gray-10" />
          <span>مبلغ کل: {formatPrice(order.totalAmount)} تومان</span>
        </div>

        <div className="flex items-center gap-2">
          <IoPricetagOutline className="text-gray-10" />
          <span>تخفیف: {formatPrice(order.totalDiscount)} تومان</span>
        </div>

        <div className="flex items-center gap-2">
          <IoCarOutline className="text-gray-10" />
          <span>هزینه ارسال: {formatPrice(order.shippingCost)} تومان</span>
        </div>

        <div className="flex items-center gap-2 md:col-span-3">
          <IoLocationOutline className="text-gray-500" />
          <span>آدرس: {order.address?.fullAddress || "آدرس ثبت نشده"}</span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline className="text-gray-500" />
          <span>
            {new Intl.DateTimeFormat("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(order.createdAt))}
          </span>
        </div>
      </div>

      <div className="my-5 border-t border-dashed border-gray-200" />

      <div className="mt-4">
        {order.items && (
          <OrderItemsTable
            items={order.items}
            totalAmount={order.totalAmount}
          />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
