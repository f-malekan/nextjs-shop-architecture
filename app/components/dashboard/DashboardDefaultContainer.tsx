import { ReactNode } from "react";

interface Props {
  headerLeftSide?: ReactNode;
  title: string;
  children: ReactNode;
}

const DashboardDefaultContainer = ({
  children,
  headerLeftSide,
  title,
}: Props) => {
  return (
    <div className="md:border border-gray-4 rounded-xl p-2 md:p-5">
      <header className="hidden md:flex justify-between items-center border-b border-gray-4 text-gray-11 pb-4 mb-5 font-semibold">
        <h1 className="hidden md:block text-lg">{title}</h1>
        {headerLeftSide}
      </header>
      <div>{children}</div>
    </div>
  );
};

export default DashboardDefaultContainer;
