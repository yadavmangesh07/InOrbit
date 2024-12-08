// "use client"

// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Drawer,
//   DrawerContent,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// type Status = {
//   value: string
//   label: string
// }


// const statuses: Status[] = [
//   {
//     value: "Computer Science & Engineering",
//     label: "Computer Science & Engineering",
//   },
//   {
//     value: "Artificial Intelligence",
//     label: "Artificial Intelligence",
//   },
//   {
//     value: "Data Science",
//     label: "Data Science",
//   },
//   {
//     value: "Information Technology",
//     label: "Information Technology",
//   },
//   {
//     value: "Internet of Things",
//     label: "Internet of Things",
//   },
//   {
//     value: "Cyber Security",
//     label: "Cyber Security",
//   },
// ]

// export function useMediaQuery(query: string) {
//     const [matches, setMatches] = React.useState(false);
  
//     React.useEffect(() => {
//       const mediaQuery = window.matchMedia(query);
//       setMatches(mediaQuery.matches);
  
//       const handler = (event: MediaQueryListEvent) => {
//         setMatches(event.matches);
//       };
  
//       mediaQuery.addEventListener("change", handler);
//       return () => mediaQuery.removeEventListener("change", handler);
//     }, [query]);
  
//     return matches;
//   }

// export function ComboBoxBranch() {
//   const [open, setOpen] = React.useState(false)
//   const isDesktop = useMediaQuery("(min-width: 768px)")
//   const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    
//   )

//   if (isDesktop) {
//     return (
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button variant="outline" className="col-span-3 justify-start">
//             {selectedStatus ? <>{selectedStatus.label}</> : <>+ Select Branch</>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-[200px] p-0" align="start">
//           <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
//         </PopoverContent>
//       </Popover>
//     )
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline" className="w-[150px] justify-start">
//           {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set Branch</>}
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <div className="mt-4 border-t">
//           <StatusList setOpen={setOpen} setSelectedStatus={setSelectedStatus} />
//         </div>
//       </DrawerContent>
//     </Drawer>
//   )
// }

// function StatusList({
//   setOpen,
//   setSelectedStatus,
// }: {
//   setOpen: (open: boolean) => void
//   setSelectedStatus: (status: Status | null) => void
// }) {
//   return (
//     <Command>
//       <CommandInput placeholder="Filter status..." />
//       <CommandList>
//         <CommandEmpty>No results found.</CommandEmpty>
//         <CommandGroup>
//           {statuses.map((status) => (
//             <CommandItem
//               key={status.value}
//               value={status.value}
//               onSelect={(value) => {
//                 setSelectedStatus(
//                   statuses.find((priority) => priority.value === value) || null
//                 )
//                 setOpen(false)
//               }}
//             >
//               {status.label}
//             </CommandItem>
//           ))}
//         </CommandGroup>
//       </CommandList>
//     </Command>
//   )
// }

"use client";

import * as React from "react";
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
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  { value: "Computer Science & Engineering", label: "Computer Science & Engineering" },
  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
  { value: "Data Science", label: "Data Science" },
  { value: "Information Technology", label: "Information Technology" },
  { value: "Internet of Things", label: "Internet of Things" },
  { value: "Cyber Security", label: "Cyber Security" },
];

export function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

interface ComboBoxBranchProps {
  onChange: (value: string) => void; // Accepting onChange prop
}

export function ComboBoxBranch({ onChange }: ComboBoxBranchProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null);

  const buttonText = selectedStatus ? selectedStatus.label : "+ Select Branch";

  const handleSelect = (value: string) => {
    const selected = statuses.find((s) => s.value === value) || null;
    setSelectedStatus(selected);
    onChange(value); // Call onChange with the selected value
    setOpen(false);
  };

  const content = (
    <StatusList setOpen={setOpen} onSelect={handleSelect} />
  );

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="col-span-3 justify-start">
            {buttonText}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          {content}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {buttonText}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">{content}</div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  onSelect,
}: {
  setOpen: (open: boolean) => void;
  onSelect: (value: string) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                onSelect(value); // Call onSelect instead of setSelectedStatus directly
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
