"use client";

import UserMenu from "../HeaderComponents/UserMenu";
import { useSession } from "next-auth/react";
import BaseButton from "../BaseComponents/BaseButton";
import { useAuthModalStore } from "@/store/useAuthModalStore";
import { useEffect } from "react";

const SignInButtopn = () => {
  const { data: session, update } = useSession();
  const user = session?.user;

  const { openModal, isOpen } = useAuthModalStore();

  useEffect(() => {
    update();
  }, [isOpen]);

  if (!user) {
    return (
      <BaseButton onClick={openModal} variant="white">
        ورود و ثبت نام
      </BaseButton>
    );
  }

  return <UserMenu name={user.name ?? "کاربر"} />;
};

export default SignInButtopn;
