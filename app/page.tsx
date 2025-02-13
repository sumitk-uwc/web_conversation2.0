"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>Hello I am default page</h1>
    </section>
  );
}
