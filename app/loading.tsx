const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/20 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-3xl border border-emerald-200/70 bg-white/80 p-6 text-center shadow-xl shadow-emerald-900/10">
        <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-emerald-200 border-t-[#184025] animate-spin"></div>

        <p className="text-base font-bold text-[#184025]">در حال بارگذاری...</p>
        <p className="mt-1 text-sm text-[#184025]/70">لطفاً چند لحظه صبر کنید</p>
      </div>
    </div>
  );
};

export default Loading;
