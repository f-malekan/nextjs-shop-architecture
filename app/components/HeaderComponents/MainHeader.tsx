import CartButton from "./ShoppingCartButton";
import NavBar from "./NavBar";
import SignInButton from "../Auth/SignInButton";
import Link from "next/link";
import Image from "next/image";
import SearchComponent from "./SearchComponent";

const MainHeader = async () => {
  return (
    <header className="top-0 z-50 mb-3 md:mb-10 ">
      <div className="max-w-360 mx-auto flex p-3 md:px-12 lg:px-20 justify-between items-center gap-5">
        <Link href="/" className="md:flex-1">
          <Image
            src={"/images/mainLogo.png"}
            alt="logo"
            width={180}
            height={45}
            className="w-32 md:w-40 lg:w-44 h-auto"
            priority
          />
        </Link>

        <div className="flex md:gap-6 items-center md:justify-between md:flex-2">
          <div className="flex md:order-1 items-center sm:gap-2 lg:gap-3">
            <SearchComponent />

            <CartButton />

            <SignInButton />
          </div>
          <NavBar className="md:order-0" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
