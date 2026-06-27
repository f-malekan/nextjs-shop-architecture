"use client";

import { useAuthModalStore } from "@/store/useAuthModalStore";
import BaseButton from "../BaseComponents/BaseButton";
import { signOut } from "next-auth/react";

const LogoutConfirm = () => {
  const { closeModal, setView } = useAuthModalStore();

  const handleLogout = () => {
    setView("signin");
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="flex flex-col py-5">
      <p className="text-xl font-bold mb-6">خروج از حساب کاربری</p>
      <p className="mb-15">آیا میخواهید از حساب کاربری خود خارج شوید؟</p>
      <div className="grid grid-cols-2 gap-2">
        <BaseButton onClick={closeModal} variant="white">
          انصراف
        </BaseButton>
        <BaseButton onClick={handleLogout} variant="danger">
          خروج
        </BaseButton>
      </div>
    </div>
  );
};

export default LogoutConfirm;
