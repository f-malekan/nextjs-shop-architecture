const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/20 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-3xl border border-primary/20 bg-primary-tint-1 p-6 text-center shadow-lg">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-primary/25 border-t-primary-shade-4" />

        <p className="text-base font-bold text-gray-11">در حال بارگذاری...</p>
      </div>
    </div>
  );
};

export default Loading;
