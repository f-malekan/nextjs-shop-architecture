import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  href: string;
  viewAllLabel?: string;
};

const CommonSectionHeader = ({
  title,
  subtitle,
  href,
  viewAllLabel = "مشاهده همه",
}: SectionHeaderProps) => {
  return (
    <div className="w-full flex items-end justify-between gap-4 py-6 rtl border-b border-(--color-text-pink)">
      <div className="text-right">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6a4a42]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-[#8b6f67]">{subtitle}</p>
        )}
      </div>

      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-medium text-[#6a4a42] transition-colors hover:text-[#184025]"
      >
        <span>{viewAllLabel}</span>

        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
};
export default CommonSectionHeader;
