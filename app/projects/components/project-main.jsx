"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Minus,
  Paperclip,
  Plus,
  Timer,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { projectData } from "@/app/data";
import { DropdownAttachment } from "@/components/menu-attachment";
import { useRouter } from "next/navigation";

export default function Projects() {
  const path = usePathname().split("/")[2];
  const [close, setClose] = useState("team");
  const router = useRouter();

  const detail = projectData.find((data) => data.id === Number(path));
  const cardCondition = (id) => {
    switch (id) {
      case "team":
        return teamCard();
      case "attachment":
        return attachmentCard();
    }
  };

  const teamCard = () => {
    return (
      <div className={`w-[400px]`}>
        <div className="flex justify-between font-medium text-lg">
          In this project
          <button onClick={() => setClose("")}>
            <Minus />
          </button>
        </div>
        <Card className="p-3 min-h-[380px] space-y-3">
          {detail.team.map((team, i) => {
            return (
              <Card className="p-3 flex gap-3 place-items-center" key={i}>
                <Avatar>
                  <AvatarImage src={team.img} alt={team.name} />
                </Avatar>
                <div>
                  <h1 className="text-sm font-medium">{team.name}</h1>
                  <h1 className="text-sm ">{team.role}</h1>{" "}
                </div>
              </Card>
            );
          })}
          <div className="flex justify-center">
            <button className="bg-zinc-100 rounded-full p-1 hover:bg-zinc-200 transition-all">
              <Plus size={20} />
            </button>
          </div>
        </Card>
      </div>
    );
  };

  const attachmentCard = () => {
    return (
      <div className={`w-[400px]`}>
        <div className="flex justify-between font-medium text-lg">
          Attachments
          <button onClick={() => setClose("")}>
            <Minus />
          </button>
        </div>
        <Card className="p-3 min-h-[380px] space-y-3">
          {detail.attachments.map((attach, i) => {
            return (
              <Card
                key={i}
                className="p-3 flex gap-3 place-items-center justify-between hover:bg-zinc-100 hover:cursor-pointer"
                onClick={() => console.log("test")}
              >
                <div className="flex gap-3 place-items-center">
                  <FolderOpen />
                  {attach.name}
                </div>
                <button className="hover:bg-zinc-100 rounded-lg p-1 transition-all">
                  <DropdownAttachment />
                </button>
              </Card>
            );
          })}
          <div className="flex justify-center">
            <button className="bg-zinc-100 rounded-full p-1 hover:bg-zinc-200 transition-all">
              <Plus size={20} />
            </button>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="capitalize">
      <div className="flex justify-between place-items-center">
        <div className="flex gap-2 place-items-baseline">
          <button onClick={() => router.push("/projects")}>
            <ChevronLeft />
          </button>
          <h1 className="text-3xl font-semibold mb-2">{detail.title}</h1>
        </div>
        <div className="flex place-items-center gap-2">
          <h1 className="flex gap-1 text-xl font-semibold mb-2">
            <Timer />
            {detail.deadline}
          </h1>
          <h1 className="text-sm font-medium px-2 bg-zinc-200 rounded-full mb-2">
            {detail.status}
          </h1>

          <div className="hover:cursor-pointer mb-2">
            <DropdownAttachment />
          </div>
        </div>
      </div>
      <p>{detail.description}</p>
      <br />
      <div className="flex gap-4">
        <div>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger
                onClick={() => setClose("team")}
                className={`${
                  close === "team" ? "bg-zinc-200" : ""
                } hover:bg-zinc-200 bg-zinc-100 rounded-full transition-all p-1`}
              >
                <Users />
              </TooltipTrigger>
              <TooltipContent className="font-medium">
                <p>Team</p>
              </TooltipContent>
            </Tooltip>
            <br />

            <Tooltip>
              <TooltipTrigger
                onClick={() => setClose("attachment")}
                className={`${
                  close === "attachment" ? "bg-zinc-200" : ""
                } hover:bg-zinc-200 bg-zinc-100 rounded-full transition-all p-1`}
              >
                <Paperclip />
              </TooltipTrigger>
              <TooltipContent className="font-medium">
                <p>Attachments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {cardCondition(close)}

        <div className="grid grid-cols-4 gap-4 w-full min-h-[400px]">
          <Card className="p-3 h-full">
            <div className="flex justify-between mb-2">
              <div className="flex gap-1 place-items-center">
                <h1 className="font-medium">Listed</h1>
                <h1 className="bg-zinc-200 rounded-full h-5 w-5 flex place-items-center justify-center font-medium">
                  {detail.tasks.listed.length}
                </h1>
              </div>
              <button className="hover:bg-zinc-200 rounded-md transition-all">
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-2">
              {detail.tasks.listed.map((listed, i) => {
                return (
                  <Card className="p-2 flex justify-between" key={i}>
                    <p>{listed.task}</p>
                    <div className="hover:cursor-pointer">
                      <DropdownAttachment />
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between mb-2">
              <div className="flex gap-1 place-items-center">
                <h1 className="font-medium">In Progress</h1>
                <h1 className="bg-zinc-200 rounded-full h-5 w-5 flex place-items-center justify-center font-medium">
                  {detail.tasks.inProgress.length}
                </h1>
              </div>
              <button className="hover:bg-zinc-200 rounded-md transition-all">
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-2">
              {detail.tasks.inProgress.map((listed, i) => {
                return (
                  <Card className="p-2 flex justify-between" key={i}>
                    <p>{listed.task}</p>
                    <div className="hover:cursor-pointer">
                      <DropdownAttachment />
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between mb-2">
              <div className="flex gap-1 place-items-center">
                <h1 className="font-medium">Completed</h1>
                <h1 className="bg-zinc-200 rounded-full h-5 w-5 flex place-items-center justify-center font-medium">
                  {detail.tasks.completed.length}
                </h1>
              </div>
              <button className="hover:bg-zinc-200 rounded-md transition-all">
                <Plus size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {detail.tasks.completed.map((listed, i) => {
                return (
                  <Card className="p-2 flex justify-between" key={i}>
                    <p>{listed.task}</p>
                    <div className="hover:cursor-pointer">
                      <DropdownAttachment />
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
          <Card className="p-3">
            <div className="flex justify-between mb-2">
              <div className="flex gap-1 place-items-center">
                <h1 className="font-medium">Backlog</h1>
                <h1 className="bg-zinc-200 rounded-full h-5 w-5 flex place-items-center justify-center font-medium">
                  {detail.tasks.backlog.length}
                </h1>
              </div>
              <button className="hover:bg-zinc-200 rounded-md transition-all">
                <Plus size={20} />
              </button>
            </div>
            <div className="space-y-2">
              {detail.tasks.backlog.map((listed, i) => {
                return (
                  <Card className="p-2 flex justify-between" key={i}>
                    <p>{listed.task}</p>
                    <div className="hover:cursor-pointer">
                      <DropdownAttachment />
                    </div>
                  </Card>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
