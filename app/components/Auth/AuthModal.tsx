"use client";

import BaseModal from "../BaseComponents/BaseModal";
import SignInForm from "./SignInForm";
import { useAuthModalStore } from "@/store/useAuthModalStore";
import SignUpForm from "./SignUpForm";
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
        <div className="p-7 flex flex-col rounded-2xl">{renderForm()}</div>
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
