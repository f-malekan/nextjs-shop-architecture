import { getUserOrders } from "@/app/actions/dashboardActions/userOrderActions";
import Image from "next/image";
import OrderStatusBadge from "@/app/components/dashboard/OrderStatusBadge";
import EmptyState from "@/app/components/CommonComponents/EmptyState";
import { RiShoppingBag3Line } from "react-icons/ri";
import ErrorState from "@/app/components/CommonComponents/ErrorState";
import type { Metadata } from "next";
import OrderCard from "@/app/components/dashboard/OrderCard";

export const metadata: Metadata = {
  title: "سفارشات من | داشبورد",
  robots: {
    index: false,
    follow: false,
  },
};

const OrdersPage = async () => {
  const { data: orders, success, message } = await getUserOrders();

  if (!success) return <ErrorState title={message} />;

  if (!orders) return <EmptyState title="شما سفارشی ثبت نکرده اید." />;

  return (
    <div className="space-y-6 md:border md:border-gray-4 p-3 md:p-6 rounded-xl">
      <header>
        <h1 className="text-2xl text-gray-11 md:border-b md:border-gray-4">تاریخچه سفارشات</h1>
      </header>

      <div className="flex flex-col gap-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            // <div
            //   key={order.id}
            //   className="group flex flex-col md:flex-row md:items-center justify-between rounded-4xl bg-white p-6 shadow-sm border border-gray-50 transition-all hover:border-(--color-dark-green) gap-4"
            // >
            //   <div className="flex flex-col gap-4 flex-1">
            //     <div className="flex items-center gap-3">
            //       <span className="font-bold text-(--color-dark-green) text-sm truncate max-w-50">
            //         سفارش #{order.id}
            //       </span>
            //       <OrderStatusBadge status={order.status} />
            //       <p className="text-xs text-gray-400">
            //         {new Date(order.createdAt).toLocaleDateString("fa-IR")}
            //       </p>
            //     </div>

            //     <div className="flex items-center gap-2 overflow-x-auto pb-2">
            //       {order.items?.map((item, index) => (
            //         <div
            //           key={index}
            //           className="relative h-12 w-12 shrink-0 rounded-xl border border-gray-100 overflow-hidden bg-gray-50"
            //           title={item.product.name}
            //         >
            //           <Image
            //             src={item.product.image || "/placeholder.png"}
            //             alt={item.product.name}
            //             fill
            //             className="object-cover"
            //           />
            //         </div>
            //       ))}
            //       {(order.items?.length ?? 0) >= 3 && (
            //         <span className="text-xs text-gray-400 mr-2">...</span>
            //       )}
            //     </div>
            //   </div>

            //   <div className="text-left flex flex-col items-end justify-center border-t md:border-t-0 pt-4 md:pt-0">
            //     <p className="text-sm font-bold text-(--color-dark-green)">
            //       {Number(order.totalAmount).toLocaleString("fa-IR")} تومان
            //     </p>
            //     <button className="mt-2 text-xs font-medium text-gray-400 transition-all hover:text-(--color-dark-green) hover:underline hover:underline-offset-4">
            //       مشاهده جزئیات
            //     </button>
            //   </div>
            // </div>
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <EmptyState
            icon={<RiShoppingBag3Line size={28} />}
            title="سفارشی یافت نشد"
            description="هنوز خریدی ثبت نکردی. اولین سفارشت رو از فروشگاه شروع کن."
            actionLabel="رفتن به فروشگاه"
            actionHref="/products"
          />
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
