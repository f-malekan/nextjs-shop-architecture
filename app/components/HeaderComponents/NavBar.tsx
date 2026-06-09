import Link from "next/link";

interface Props {
  isMobile?: boolean; 
}

const NavBar = ({ isMobile }: Props) => {
  const styles = isMobile 
    ? "flex flex-col gap-6 text-xl" 
    : "flex gap-8 text-sm font-semibold";

  return (
    <nav className={styles}>
      <Link href="/">خانه</Link>
      <Link href="/products">محصولات</Link>
      <Link href="/contact-us">تماس با ما</Link>
    </nav>
  );
};

export default NavBar;
