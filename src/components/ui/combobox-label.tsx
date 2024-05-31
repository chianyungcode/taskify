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
import { initialLabelTask } from "@/data/initData";
import { useEffect, useState } from "react";
import { Label } from "@/types";

interface ComboboxLabelProps {
  getLabel: (label: Label) => void;
}

function ComboboxLabel({ getLabel }: ComboboxLabelProps) {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<Label>(
    initialLabelTask[0]
  );

  useEffect(() => {
    getLabel(selectedLabel);
  }, [getLabel, selectedLabel]);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Label</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {selectedLabel ? (
              <>
                <span
                  className={`w-3 h-3 rounded-full bg-[${selectedLabel.color ? selectedLabel.color : "#000"}]`}
                />
                {selectedLabel.name}
              </>
            ) : (
              <>+ Set label</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change label..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {initialLabelTask.map((label) => (
                  <CommandItem
                    key={label.value}
                    value={label.value}
                    onSelect={(value) => {
                      setSelectedLabel(
                        initialLabelTask.find(
                          (priority) => priority.value === value
                        ) || initialLabelTask[0]
                      );
                      setOpen(false);
                    }}
                  >
                    {/* <label.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        label.value === selectedLabel?.value
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    /> */}
                    <span
                      className={`w-3 h-3 rounded-full bg-[${selectedLabel.color ? selectedLabel.color : "#000"}]`}
                    />
                    <span>{label.name}</span>
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

export default ComboboxLabel;
