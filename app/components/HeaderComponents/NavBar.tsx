import Link from "next/link";

interface Props {
  className?: string;
}

const NavBar = async ({ className }: Props) => {
  return (
    <nav className={`flex gap-4 ${className || ""}`}>
      <Link href="/">خانه</Link>
      <Link href="/products">محصولات</Link>
      <Link href="/contact-us">تماس با ما</Link>
    </nav>
  );
};

export default NavBar;
