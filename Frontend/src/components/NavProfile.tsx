

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProfileTabs } from "./ProfileSectionComponents/ProfileTabs"

export function NavProfile() {
  return (
    <Sheet >
      <SheetTrigger asChild>
       <p className="text-sm font-semibold ml-4">Profile</p>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1030px] overflow-scroll">
      <ProfileTabs/>
      </SheetContent>
      
        
    </Sheet>
  )
}


