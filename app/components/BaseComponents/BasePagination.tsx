import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  currentPage: number;
  totalPages: number;
  className?: string;
}

const BasePagination = ({ currentPage, totalPages, className }: Props) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages.at(-1) !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Link
        href={`?page=${Math.max(1, currentPage - 1)}`}
        className="w-10 h-10 bg-gray-4 flex justify-center items-center rounded hover:bg-gray-6"
      >
        <IoIosArrowForward color="gray" />
      </Link>

      {getPageNumbers().map((page, index) => (
        <Link
          key={index}
          href={page === "..." ? "#" : `?page=${page}`}
          className={`w-10 h-10 flex justify-center items-center rounded ${
            page === currentPage
              ? "bg-gray-11 text-white"
              : "bg-gray-4 text-gray-10 hover:bg-gray-6"
          } ${page === "..." ? "pointer-events-none" : ""}`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`?page=${Math.min(totalPages, currentPage + 1)}`}
        className="w-10 h-10 bg-gray-4 flex justify-center items-center rounded hover:bg-gray-6"
      >
        <IoIosArrowBack color="gray" />
      </Link>
    </div>
  );
};

export default BasePagination;
