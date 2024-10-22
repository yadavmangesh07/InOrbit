import { Button } from '@/components/ui/button';
import { SheetHeader, SheetTitle, SheetDescription, SheetClose, SheetFooter } from "../ui/sheet";
import CodingProfileCard from "./CodingProfileCard";

const CodingProfiles = () => {
  return (
    <>
    <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl text-left mt-1">Coding Profiles</SheetTitle>
          <SheetDescription className="sm:text-base text-left">
            Make changes to your profiles here. Click Update Changes when you're done.
          </SheetDescription>
        </SheetHeader>
       <CodingProfileCard platformName="LeetCode"/>
       <CodingProfileCard platformName="GeekForGeeks"/>
       <CodingProfileCard platformName="CodeChef"/>
       <CodingProfileCard platformName="HackerRank"/>

       <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Update Changes</Button>
        </SheetClose>
      </SheetFooter>
    </>
    
  )
}

export default CodingProfiles;
