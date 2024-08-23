"use client";
import ProjectOverview from "./components/project-overview";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskOverview from "./components/task-overview";
import UpcomingOverview from "./components/upcoming-overview";
import { useState } from "react";

export default function Overview() {
  const active = 10;
  const stats = [
    `${active} active`,
    `${active} on hold`,
    `${active} completed`,
  ];

  return (
    <div className="overflow-hidden">
      <div className="capitalize flex w-full gap-4">
        <div className="w-full">
          <div className="flex justify-between place-items-center">
            <h1 className="text-2xl font-medium mb-2">Overview</h1>

            <div className="flex gap-5">
              {stats.map((x, i) => {
                return (
                  <div key={i}>
                    <p className="text-sm">{x}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <ProjectOverview />
          <br />
          <div className="flex w-full gap-4 ">
            <div className="">
              <UpcomingOverview />
            </div>
            <div className="w-full">
              <TaskOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
