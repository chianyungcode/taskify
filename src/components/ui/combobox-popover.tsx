/* eslint-disable */

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
import { useEffect, useState } from "react";

interface ComboboxPopoverProps {
  statusByColumn: string;
  getStatus: (status: string) => void;
}

const statuses = ["To do", "In Progress", "Completed"];

const ComboboxPopover = ({
  statusByColumn,
  getStatus,
}: ComboboxPopoverProps) => {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("To do");

  useEffect(() => {
    getStatus(selectedStatus);
  }, [selectedStatus, getStatus]);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Status</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {statusByColumn === undefined ? (
              <>{selectedStatus}</>
            ) : (
              <>{statusByColumn}</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status...">
              <CommandList>
                <CommandEmpty>No results found</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status}
                      value={status}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find((priority) => priority === value) ||
                            "To do"
                        );
                        setOpen(false);
                      }}
                    >
                      <span>{status}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </CommandInput>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboboxPopover;
