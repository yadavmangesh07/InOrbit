import { SignInButton} from "@clerk/clerk-react"
import { NavigationMenuDemo } from "./NavigationMenuDemo"

const HeroPage = () => {
  return (
    <div className="flex items-center justify-between w-full ml-[5rem] mr-[5rem]">
      <span className="font-semibold text-sm">Logo</span>
      <NavigationMenuDemo/>
      <div className=" flex font-semibold text-sm ">
        <span >
          

        <SignInButton />
         
        </span>
        <span className="ml-[1rem]">
          <SignInButton/>
        </span>
       
      </div>
    </div>
  )
}

export default HeroPage