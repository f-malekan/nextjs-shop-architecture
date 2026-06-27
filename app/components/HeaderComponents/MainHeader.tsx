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
        <Link href="/" className="shrink-0 lg:order-1">
          <Image
            src={"/images/mainLogo.png"}
            alt="logo"
            width={180}
            height={45}
            className="w-32 md:w-40 lg:w-44 h-auto"
            priority
          />
        </Link>

        <div className="flex gap-3 md:gap-6 items-center lg:order-3">
          <div className="hidden sm:block">
            <SearchComponent />
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            {session?.user && <CartButton />}
            <SignInButton />
          </div>
        </div>

        <NavBar categories={data} className="lg:order-2" />
      </div>
    </header>
  );
};

export default MainHeader;
