import { FiArrowLeft } from "react-icons/fi";
import BaseButton from "../BaseComponents/BaseButton";
import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  viewAllLabel?: boolean;
  href?: string;
};

const CommonSectionHeader = ({
  title,
  subtitle,
  viewAllLabel = false,
  href,
}: SectionHeaderProps) => {
  return (
    <div className="w-full flex items-end justify-between gap-4 border-b border-gray-6 text-gray-10">
      <div>
        <h2 className="text-2xl font-bold my-2">{title}</h2>

        {subtitle && <p>{subtitle}</p>}
      </div>
      {viewAllLabel && href ? (
        <Link href={href} className="flex gap-2 items-center">
          <span>مشاهده همه</span>

          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
};
export default CommonSectionHeader;
