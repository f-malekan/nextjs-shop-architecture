"use client";

import UserMenu from "../HeaderComponents/UserMenu";
import { useSession } from "next-auth/react";
import BaseButton from "../BaseComponents/BaseButton";
import { useAuthModalStore } from "@/store/useAuthModalStore";

const SignInButtopn = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const { openModal } = useAuthModalStore();

  if (!user) {
    return <BaseButton onClick={openModal} variant="white">ورود و ثبت نام</BaseButton>;
  }

  return (
    <div className="flex items-center gap-1">
      <UserMenu
        name={user.name ?? "کاربر"}
      />
    </div>
  );
};

export default SignInButtopn;
