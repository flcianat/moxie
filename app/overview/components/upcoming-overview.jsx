"use client";

import { upcoming } from "@/app/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UpcomingOverview() {
  return (
    <div className="w-[350px]">
      <Card className="border border-zinc-300 min-h-[380px] overflow-auto">
        <CardContent className="p-3">
          <p className="mb-2">Upcoming</p>
          <div className="grid grid-flow-row gap-y-2">
            {upcoming.map((data, i) => {
              return (
                <Card key={i}>
                  <CardContent className="p-3 border border-zinc-300">
                    <div className="flex gap-2 place-items-center">
                      <Avatar className="border border-zinc-200">
                        <AvatarImage src={data.img} alt={data.assignedTo} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="w-full">
                        <h1 className="font-medium">{data.title}</h1>
                        <div className="flex justify-between">
                          <h1 className="text-sm">{data.assignedTo}</h1>
                          <h1 className="text-sm">{data.datetime}</h1>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
