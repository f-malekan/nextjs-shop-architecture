"use client";

import BaseModal from "../BaseComponents/BaseModal";
import SignInForm from "./SignInForm";
import { useAuthModalStore } from "@/store/useAuthModalStore";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import LogoutConfirm from "./LogoutConfirm";

const AuthModal = () => {
  const { isOpen, closeModal, view } = useAuthModalStore();
  const renderForm = () => {
  if (view === "signin") return <SignInForm />;
  if (view === "logout") return <LogoutConfirm />;
  return <SignUpForm />;
};
  return (
    <BaseModal isOpen={isOpen} onClose={closeModal}>
      <div className="flex grid-col-2 rounded-2xl">
        <div className="w-[50%] min-h-125 h-full relative">
          <Image
            src="/images/login-modal.jpg"
            className="object-cover"
            fill
            alt="login"
          />
        </div>
        <div className="w-[50%] p-7 flex flex-col">
          {renderForm()}
        </div>
      </div>
    </BaseModal>
  );
};

export default AuthModal;
