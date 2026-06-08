import { auth } from "../../auth"; // از آدرس فایل auth سروری
import Link from "next/link";
import UserMenu from "../HeaderComponents/UserMenu";

const SignInButtopn = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(user)

  if (!user) {
    return (
      <Link href="/login" className="text-sm font-medium">
        ثبت نام و ورود
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-1">
      
      <UserMenu 
        name={user.name ?? "کاربر"} 
        email={user.email ?? ""} 
        image={user.image ?? ""} 
      />
    </div>
  );
};

export default SignInButtopn;
