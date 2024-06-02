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
import { useLabelStore } from "@/lib/zustand-store/label-store";
import { useState } from "react";

function ComboboxLabel() {
  const [open, setOpen] = useState(false);
  const { labels, setLabels } = useLabelStore();

  const selectedLabel = labels.length > 0 ? labels[0] : null;

  return (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-muted-foreground">Label</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] space-x-2 justify-start"
          >
            {selectedLabel ? (
              <>
                <span
                  style={{
                    backgroundColor: selectedLabel.color || "#000",
                  }}
                  className="w-3 h-3 rounded-full"
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
                    className="flex items-center space-x-2"
                    key={label.value}
                    value={label.value}
                    onSelect={(value) => {
                      setLabels([
                        initialLabelTask.find(
                          (priority) => priority.value === value
                        ) || initialLabelTask[0],
                      ]);
                      setOpen(false);
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: label.color || "#000",
                      }}
                      className="w-3 h-3 rounded-full"
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
