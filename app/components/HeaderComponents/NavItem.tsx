import { IconType } from "react-icons/lib";

interface Props {
  icon: IconType;
  href?: string;
  label: string;
  active?: boolean;
  hasBorder?: boolean;
  onClick?: () => void;
  className?: string;
}

const NavItem = ({
  icon: Icon,
  href,
  label,
  active = false,
  hasBorder = true,
  onClick,
  className,
}: Props) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${className}  flex rounded transition-all p-2 md:px-2 md:py-4 md:gap-2 cursor-pointer items-center ${hasBorder ? "border-b border-gray-4 md:border-none" : ""} ${
        active ? "border-b-4 md:border-r-4 md:bg-gray-2 border-gray-10" : ""
      } `}
    >
      <Icon className="hidden md:block text-xl" />

      {label}
    </a>
  );
};

export default NavItem;
