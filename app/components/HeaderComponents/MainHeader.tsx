import React from "react";
import { auth } from "../../auth";
import SearchBar from "./SearchBar";
import CartButton from "./ShoppingCartButton";
import NavBar from "./NavBar";
import SignInButtopn from "../Auth/SignInButton";
import Link from "next/link";
import Image from "next/image";

const MainHeader = async () => {
  const session = await auth();

  return (
    <div className="flex bg-[#C3EFD4] p-4 px-30 justify-between items-center">
      <Link href="/">
        <Image
          src={"/images/mainLogo.png"}
          alt="logo"
          width={200}
          height={50}
          priority
        />
      </Link>

      <NavBar />
      <div className="flex gap-9 items-center">
        <SearchBar />
        {session?.user && <CartButton />}
        <SignInButtopn />
      </div>
    </div>
  );
};

export default MainHeader;
