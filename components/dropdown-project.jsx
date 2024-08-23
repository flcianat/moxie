import {
  CheckCircle2,
  Circle,
  Cloud,
  CreditCard,
  Ellipsis,
  Github,
  Hourglass,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Pause,
  PenBoxIcon,
  Plus,
  PlusCircle,
  Settings,
  Target,
  Trash2,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownProject() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuItem>
          <PenBoxIcon className="mr-2 h-4 w-4" />
          <span>Rename</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Remove </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Target className="mr-2 h-4 w-4" />
            <span>Change status</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Circle className="mr-2 h-4 w-4" />
                <span>Listed</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Hourglass className="mr-2 h-4 w-4" />
                <span>In Progress</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                <span>Completed</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pause className="mr-2 h-4 w-4" />
                <span>On Hold</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
