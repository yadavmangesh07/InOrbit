import { Button } from '@/components/ui/button';
import { SheetHeader, SheetTitle, SheetDescription, SheetClose, SheetFooter } from "../ui/sheet";
import CodingProfileCard from "./CodingProfileCard";
import hackerrank from "@/assets/hackerranklogo.png"
import codingNinja from "@/assets/CNLOGO.png.svg"

const CodingProfiles = () => {
  return (
    <>
    <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl text-left mt-2">Coding Profiles</SheetTitle>
          <SheetDescription className="sm:text-base text-left">
            Make changes to your profiles here. Click Update Changes when you're done.
          </SheetDescription>
        </SheetHeader>
        <hr className='mt-4'/>
       <CodingProfileCard platformName="LeetCode" imageUrl='https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000'/>
      <CodingProfileCard platformName="GeekForGeeks" imageUrl='  https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000'/>
         <CodingProfileCard platformName="CodeChef" imageUrl='https://img.icons8.com/?size=100&id=LnZMjt9rZC3d&format=png&color=000000'/>
      {/* <CodingProfileCard platformName="HackerRank"/> */}
      <CodingProfileCard platformName='HackerRank' imageUrl={hackerrank}/>
      <CodingProfileCard platformName='CodeForce' imageUrl="https://img.icons8.com/?size=100&id=YSy0lU4Y0X4z&format=png&color=000000"/>
      <CodingProfileCard platformName='CodingNinjas' imageUrl={codingNinja} />

       <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Update Changes</Button>
        </SheetClose>
      </SheetFooter>
    </>
    
  )
}

export default CodingProfiles;
