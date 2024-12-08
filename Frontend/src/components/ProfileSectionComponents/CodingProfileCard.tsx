

import { ChevronDown, ChevronRight, CirclePlus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";




interface CodingProfileCardProps {
  platformName: string;
  imageUrl:string
}

const CodingProfileCard = ({ platformName,imageUrl }: CodingProfileCardProps) => {
  return (
    <>
      
      <div className="ml-2 md:ml-6 sm:flex items-center gap-2 space-y-2 mt-4 mb-6">
        <span className="flex items-center text-sm md:text-base font-medium gap-6">
          <span className="flex items-center gap-2 "><img src={imageUrl} className="w-7 h-7 md:w-8 md:h-8"></img> {platformName}</span>
          <ChevronRight className="hidden md:block" />
          <ChevronDown className="block md:hidden" />
        </span>
        <div className="space-x-2 space-y-2 md:space-x-0 md:space-y-0 md:flex justify-between md:items-center sm:w-full gap-2">
          <Input placeholder={`https://www.${platformName}.com/username`} className="tracking-wider" />
          <Button variant={'secondary'} className="text-xs sm:text-sm gap-1 ">
            <CirclePlus size={17} color="green" />
            Add
          </Button>
          <Button variant={"secondary"} className="text-xs sm:text-sm gap-1" >
            <Trash2 size={17} color="red"  />
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CodingProfileCard;



