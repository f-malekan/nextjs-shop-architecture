import { auth } from "../../auth";
import SearchBar from "./SearchBar";
import CartButton from "./ShoppingCartButton";
import NavBar from "./NavBar";
import SignInButton from "../Auth/SignInButton";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const MainHeader = async () => {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 bg-[#C3EFD4]">
      <div className="max-w-360 mx-auto flex p-4 px-6 md:px-12 lg:px-20 justify-between items-center">
        <Link href="/" className="shrink-0">
          <Image
            src={"/images/mainLogo.png"}
            alt="logo"
            width={180}
            height={45}
            className="w-32 md:w-40 lg:w-44 h-auto"
            priority
          />
        </Link>

        <div className="hidden lg:block">
          <NavBar />
        </div>

        <div className="flex gap-3 md:gap-6 items-center">
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            {session?.user && <CartButton />}
            <SignInButton />

            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
