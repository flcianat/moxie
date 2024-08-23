"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks } from "@/app/data";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function TaskOverview() {
  const status = ["all task", "pending", "done"];
  return (
    <div className="capitalize">
      <Tabs defaultValue="all task">
        <TabsList>
          {status.map((x) => {
            return (
              <TabsTrigger className="capitalize" value={x} key={x}>
                {x}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {/* TODO : change these */}
      </Tabs>

      <div className="overflow-auto max-h-[310px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Task</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Priority</TableHead>
              <TableHead className="text-center">Due Date</TableHead>
              <TableHead className="text-center">Assigned to</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell className="text-center font-medium">
                  {task.title}
                </TableCell>
                <TableCell className="text-center">{task.status}</TableCell>
                <TableCell className="text-center">{task.priority}</TableCell>
                <TableCell className="text-center">{task.dueDate}</TableCell>
                <TableCell className="flex justify-center">
                  <Avatar className="bg-white border border-zinc-200">
                    <AvatarImage src={task.img} alt={task.assignedTo} />
                  </Avatar>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
