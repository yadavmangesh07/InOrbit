

import { ChevronDown, ChevronRight, CirclePlus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";




interface CodingProfileCardProps {
  platformName: string;
}

const CodingProfileCard = ({ platformName }: CodingProfileCardProps) => {
  return (
    <>
      <hr className="mt-2" />
      <div className="ml-2 md:ml-6 sm:flex items-center gap-2 space-y-2 mt-4 mb-4">
        <span className="flex items-center text-base font-medium">
          {platformName}
          <ChevronRight className="hidden md:block" />
          <ChevronDown className="block md:hidden" />
        </span>
        <div className="space-x-2 space-y-2 md:space-x-0 md:space-y-0 md:flex md:items-center sm:w-full gap-2">
          <Input placeholder={`https://www.${platformName}.com/username`} className="tracking-wider" />
          <Button variant={'secondary'} className="text-green-500 gap-1 items-center">
            <CirclePlus size={17} />
            Add
          </Button>
          <Button variant={"secondary"} className="text-red-600 gap-1">
            <Trash2 size={17}  />
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CodingProfileCard;



