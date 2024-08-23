"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DatePicker, DatePickerDemo } from "./datepicker";

export default function CreateProject() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-2">
            <Plus size={20} />
            New Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create new project</DialogTitle>
            <DialogDescription>
              Enter details for the new project below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label>Project Name</Label>
              <Input className="h-7 border border-zinc-300" />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea className="border border-zinc-300" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Deadline</Label>
              <DatePicker />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
