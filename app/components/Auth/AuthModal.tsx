"use client";

import BaseModal from "../BaseComponents/BaseModal";
import SignInForm from "./SignInForm";
import { useAuthModalStore } from "@/store/useAuthModalStore";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import LogoutConfirm from "./LogoutConfirm";
import BaseBottomSheet from "../BaseComponents/BaseBottomSheet";

const AuthModal = () => {
  const { isOpen, closeModal, view } = useAuthModalStore();
  const renderForm = () => {
    if (view === "signin") return <SignInForm />;
    if (view === "logout") return <LogoutConfirm />;
    return <SignUpForm />;
  };
  return (
    <>
      <BaseModal
        isOpen={isOpen}
        onClose={closeModal}
        className="hidden md:flex"
      >
        <div className="flex grid-col-2 rounded-2xl">
          <div className="w-[50%] min-h-125 h-full relative">
            <Image
              src="/images/login-modal.jpg"
              className="object-cover"
              fill
              alt="login"
              sizes="(max-width: 767px) 0px, 20vw"
            />
          </div>
          <div className="w-[50%] p-7 flex flex-col">{renderForm()}</div>
        </div>
      </BaseModal>
      <BaseBottomSheet
        isOpen={isOpen}
        onClose={closeModal}
        className="md:hidden"
      >
        <div className="flex flex-col">{renderForm()}</div>
      </BaseBottomSheet>
    </>
  );
};

export default AuthModal;
