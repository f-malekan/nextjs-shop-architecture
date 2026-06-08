const DashboardStatCard = ({ label, value, unit, dotColor }: any) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md border border-gray-100">
      <div
        className={`absolute right-0 top-0 h-2 w-full ${dotColor} opacity-20`}
      />
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        {label}
      </p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-black text-(--color-dark-green)">
          {value}
        </span>
        {unit && (
          <span className="text-xs font-medium text-gray-400">{unit}</span>
        )}
      </div>
    </div>
  );
};

export default DashboardStatCard;;
