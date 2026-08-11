"use client";

import { useAuthModalStore } from "@/store/useAuthModalStore";
import AuthModal from "./AuthModal";
import { toast } from "sonner";
import { useEffect } from "react";

const LoginRequiredWarning = () => {
  const { openModal } = useAuthModalStore();

  useEffect(() => {
    openModal();
    toast.error("برای ادامه باید وارد سایت شوید.");
  }, [openModal]);
  
  return <AuthModal />;
};

export default LoginRequiredWarning;
