import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
  } from "lucide-react";
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  export function SearchBar() {
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <>
        {/* Overlay to blur background when search input is active */}
        {isFocused && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10" />
        )}
  
        {/* The actual search bar */}
        <div className="relative z-20"> {/* Ensure search bar is on top of the overlay */}
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput
              placeholder="Type a command or search..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setTimeout(() => setIsFocused(false), 200);
              }}
            />
            {isFocused && (
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <Link to="/userprofile">
                      <span>Settings</span>
                    </Link>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>
      </>
    );
  }
  