"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-12 md:py-10 h-[calc(100vh-122px)] ">
      <div className="flex flex-col items-center justify-between gap-4 max-w-[1200px] h-full mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Image
            src="/assets/images/Welcome_page_logo.png"
            alt="logo"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold py-2 sm:p-4 text-slate-800">Welcome back</h1>
          <Button
            variant="solid"
            radius="full"
            size="md"
            className="bg-green-600 text-slate-200 font-medium text-base px-12 py-4"
            onPress={() => router.push("/sign-in")}
          >
            Login to continue
          </Button>
        </div>
        <div className="flex items-center justify-between gap-4 w-full">
          <Button variant="light" size="sm" className="text-xs text-slate-500 font-normal" onPress={() => {}} >
            Privacy policy
          </Button>
          <Button variant="light" size="sm" className="text-xs text-slate-500 font-normal" onPress={() => {}}>
            Terms of service
          </Button>
        </div>
      </div>
    </section>
  );
}
