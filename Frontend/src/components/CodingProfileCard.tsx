import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useTheme } from './ui/Theme-provider';


interface CodingProfileCardProps {
  platformName: string;
}

const CodingProfileCard = ({ platformName }: CodingProfileCardProps) => {
    const { theme } = useTheme();

  return (
   <div >
   <hr className={`${theme== 'dark'? '#2F2F33' : '#EDEDED'}`} />
    <div className="mt-[1.5rem] mb-[1.5rem] flex justify-center items-center">
        
        <p className="text-sm font-medium pr-[1rem]">{platformName}</p>
        
        <Input placeholder={`https://${platformName}.com/username`} id="input" className="flex" />
  
        <Button variant="ghost" className="ml-[1rem] text-sm font-medium hover:text-[#21C35B]">
          <p className="text-[#21C35B]">Add</p>
        </Button>
       
        <Button variant="ghost" className="ml-[1rem] text-sm font-medium hover:text-[#EF4444]">
          <p className="text-[#EF4444]">Verify</p>
        </Button>
      </div>
   </div>
  )
}

export default CodingProfileCard;
