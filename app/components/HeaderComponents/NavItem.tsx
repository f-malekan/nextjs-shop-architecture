import { IconType } from "react-icons/lib";

interface Props {
  icon: IconType;
  href: string;
  label: string;
  active?: boolean;
  hasBorder?: boolean;
}

const NavItem = ({
  icon: Icon,
  href,
  label,
  active = false,
  hasBorder = true,
}: Props) => {
  return (
    <a
      href={href}
      className={`flex rounded transition-all px-2 py-4 gap-2 items-center ${hasBorder ? "border-b border-gray-4 md:border-none" : ""} ${
        active ? "border-r-4 bg-gray-2 border-gray-10" : ""
      } `}
    >
      <Icon className="text-xl" />

      {label}
    </a>
  );
};

export default NavItem;
