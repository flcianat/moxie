"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  CircleEllipsis,
  Ellipsis,
  Expand,
  Plus,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DropdownProject } from "@/components/dropdown-project";
import { projectData } from "@/app/data";
import { useRouter } from "next/navigation";

export default function ListProjects() {
  const status = ["all task", "pending", "done"];
  const router = useRouter();

  return (
    <div className="capitalize">
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        {projectData.map((x) => (
          <Card key={x.id} className="border border-zinc-400 p-3 ">
            <div className="flex justify-between">
              <p className="font-medium">{x.title}</p>
              <div className="flex gap-2 place-items-center">
                <p className="text-sm font-medium px-2 bg-zinc-200 rounded-full">
                  {x.status}
                </p>
                <button className="p-1 hover:bg-zinc-100 rounded-lg transition-all">
                  <DropdownProject />
                </button>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className="p-1 hover:bg-zinc-100 rounded-lg transition-all"
                      onClick={() => router.push(`/projects/${x.id}`)}
                    >
                      <ArrowUpRight size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="flex place-items-center gap-2">
              <div className="flex -space-x-3 *:ring *:ring-white my-2">
                {x.team.map((team, i) => {
                  return (
                    <Avatar className="bg-white border border-zinc-200" key={i}>
                      <AvatarImage src={team.img} alt={team.name} />
                    </Avatar>
                  );
                })}
              </div>
              <button className="rounded-full bg-zinc-200 p-2">
                <Plus size={20} />
              </button>
            </div>

            <Progress value={x.progress} />
          </Card>
        ))}
      </div>
    </div>
  );
}
