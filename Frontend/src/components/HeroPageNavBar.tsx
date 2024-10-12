import { SignInButton } from "@clerk/clerk-react"
import { NavigationMenuDemo } from "./NavigationMenuDemo"
import { ModeToggle } from "./ui/mode-toggle"

const HeroPageNavBar = () => {
  return (
    
     <div className="relative flex items-center justify-between w-full ml-[5rem] mr-[5rem]">
      <span className="font-semibold text-sm">Logo</span>
      <NavigationMenuDemo/>
      <div className=" flex items-center font-semibold text-sm ">
        <span className="flex">
          

        <SignInButton />
         
        </span>
        <span className="ml-[1rem]" >
          

        <ModeToggle />
         
        </span>
        
      </div>
    </div>
    
        
       
    
  )
}

export default HeroPageNavBar