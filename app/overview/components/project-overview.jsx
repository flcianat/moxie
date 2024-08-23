"use client";

import { projectData } from "@/app/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProjectOverview() {
  return (
    <div className="capitalize grid grid-cols-3 gap-4">
      {projectData.slice(0, 3).map((data, i) => {
        return (
          <div key={i}>
            <Card className="border border-zinc-300">
              <CardContent className="p-3">
                <p className="mb-2">{data.title}</p>
                <Progress value={data.progress} />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
