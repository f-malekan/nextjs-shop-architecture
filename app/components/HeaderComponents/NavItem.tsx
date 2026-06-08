const NavItem = ({ href, label, active = false }: any) => {
  return (
    <a
      href={href}
      className={`flex items-center rounded-2xl px-6 py-4 font-bold transition-all ${
        active
          ? "bg-(--color-green-2) shadow-lg shadow-green-900/20"
          : "text-(--color-text-green) transition-all hover:underline hover:underline-offset-4 hover:decoration-2"
      } `}
    >
      {label}
    </a>
  );
};

export default NavItem;
