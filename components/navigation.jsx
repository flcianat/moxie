"use client";

import { Bell, Plus, Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import CreateProject from "./create-project";
import { useEffect } from "react";

export default function Navigation() {
  const menu = ["overview", "projects"];
  const path = usePathname().split("/")[1];
  const router = useRouter();

  return (
    <div className="flex justify-between place-items-center p-4 px-8 bg-white sticky top-0">
      <h1 className="text-3xl font-bold flex gap-3  place-items-center">
        <Zap fill />
        Moxie
      </h1>

      <div className="flex gap-20">
        {menu.map((x, i) => {
          return (
            <div key={i}>
              <Button
                variant={`${x === path ? "secondary" : "ghost"}`}
                className="font-medium capitalize"
                onClick={() => router.replace(x)}
              >
                {x}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="flex gap-6 place-items-center">
        <CreateProject />

        <Bell />
        <Avatar className="border border-zinc-200">
          <AvatarImage src="/female1.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
