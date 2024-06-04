import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { initialStatusTask } from "@/data/initial-data";
import { useState } from "react";
import { useStatusTaskStore } from "@/lib/zustand-store/status-task";

function ComboboxStatus() {
  const [open, setOpen] = useState(false);
  const { statusTask, setStatusTask } = useStatusTaskStore((state) => state);

  return (
    <div className="flex items-center space-x-4">
      {/* <p className="text-sm text-muted-foreground">Status</p> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {statusTask ? (
              <>
                <statusTask.icon className="mr-2 h-4 w-4 shrink-0" />
                {statusTask.name}
              </>
            ) : (
              <>+ Set status</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {initialStatusTask.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setStatusTask(
                        initialStatusTask.find(
                          (priority) => priority.value === value
                        ) || initialStatusTask[0]
                      );
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        status.value === statusTask?.value
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    />
                    <span>{status.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default ComboboxStatus;
