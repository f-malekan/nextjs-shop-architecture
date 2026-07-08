const OrderStatusBadge = ({
  status,
}: {
  status: "processing" | "cancelled" | "delivered";
}) => {
  const styles = {
    delivered: "bg-green-50 text-green-600",
    processing: "bg-amber-50 text-amber-600",
    cancelled: "bg-red-50 text-red-600",
  };
  const labels = {
    delivered: "تحویل شده",
    processing: "در حال پردازش",
    cancelled: "لغو شده",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-[10px] font-bold ${styles[status] || "bg-gray-100"}`}
    >
      {labels[status] || "نامشخص"}
    </span>
  );
};

export default OrderStatusBadge;
