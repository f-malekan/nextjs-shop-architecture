import { auth } from "../../auth";
import CartButton from "./ShoppingCartButton";
import NavBar from "./NavBar";
import SignInButton from "../Auth/SignInButton";
import Link from "next/link";
import Image from "next/image";
import SearchComponent from "./SearchComponent";
import { getCategories } from "@/app/actions/categoryActions";
import ErrorState from "../CommonComponents/ErrorState";

const MainHeader = async () => {
  const session = await auth();
  const { data, success } = await getCategories();
  if (!success || !data) return <ErrorState />;

  return (
    <header className="top-0 z-50 mb-3 md:mb-10 ">
      <div className="max-w-360 mx-auto flex p-4 px-6 md:px-12 lg:px-20 justify-between items-center">
        <Link href="/" className="lg:flex-1">
          <Image
            src={"/images/mainLogo.png"}
            alt="logo"
            width={180}
            height={45}
            className="w-32 md:w-40 lg:w-44 h-auto"
            priority
          />
        </Link>

        <div className="flex md:gap-6 items-center lg:justify-between lg:flex-2">
          <div className="flex lg:order-1 items-center lg:gap-3">
            <div className="hidden sm:block">
              <SearchComponent />
            </div>

            {session?.user && <CartButton />}

            <SignInButton />
          </div>
          <NavBar categories={data} className="lg:order-0" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
