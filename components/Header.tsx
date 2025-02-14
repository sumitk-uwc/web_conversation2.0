import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Bell } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import NotificationPopover from "./NotificationPopover";

const Header: React.FC = async () => {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src="/assets/images/United_We_Care_Light_Logo.png"
            alt="logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="flex items-center text-white">
          {isSignedIn && (
            <div className="flex items-center gap-2">
              <div className="relative flex items-center gap-2">
                <ThemeSwitch />
                <NotificationPopover />
                <span className="absolute bottom-0 right-0 text-sm text-white bg-green-600 rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
