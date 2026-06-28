import ProfileForm from "@/app/components/dashboard/ProfileForm";
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import ChangePasswordForm from "@/app/components/dashboard/ChangePasswordForm";
import { getUser } from "@/app/actions/dashboardActions/userProfileActions";
import ErrorState from "@/app/components/CommonComponents/ErrorState";
import type { Metadata } from "next";
import DashboardDefaultContainer from "@/app/components/dashboard/DashboardDefaultContainer";

export const metadata: Metadata = {
  title: "پروفایل من | داشبورد",
  robots: {
    index: false,
    follow: false,
  },
};

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const { data: user, success, message } = await getUser();

  if (!success) return <ErrorState title={message} />;
  if (!user) {
    return (
      <ErrorState title="حساب کاربری شما یافت نشد. لطفا دوباره وارد شوید." />
    );
  }
  return (
    <div>
      <ProfileForm user={{ name: user.name ?? "", email: user.email! }} />
      {/* <ChangePasswordForm /> */}
    </div>
  );
};

export default page;
