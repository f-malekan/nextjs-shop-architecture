import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

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
      <header className="flex justify-between items-center border-b border-gray-4 text-gray-11 pb-4 mb-5 font-semibold">
        <div className="flex items-center gap-2">
          <Link className={`md:hidden`} href="/dashboard/profile">
            <FaArrowRightLong />
          </Link>
          <h1 className="text-lg">{title}</h1>
        </div>
        {headerLeftSide}
      </header>
      <div>{children}</div>
    </div>
  );
};

export default DashboardDefaultContainer;
