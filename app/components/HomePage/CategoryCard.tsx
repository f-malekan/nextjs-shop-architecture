import Image from "next/image";

const CategoryCard = ({
  title,
  img,
  className,
}: {
  title: string;
  img: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-3xl bg-gray-100 ${className}`}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-right">
        <h3 className=" text-sm md:text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
