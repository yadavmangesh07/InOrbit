import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from './ui/mode-toggle'
import { useTheme } from './ui/Theme-provider';

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
    className={`ml-[5rem] mr-[5rem] mb-[5rem] flex justify-between p-[.5rem] border-[2px] rounded-sm backdrop-blur ${
      theme === 'dark'
        ? 'bg-[rgba(31,31,35,0.1)] text-white border-[rgba(255,255,255,0.5)]'  // 10% opaque dark background and 50% transparent white border
        : 'bg-[rgba(255,255,255,0.1)] text-black border-[rgba(0,0,0,0.5)]' // 10% opaque light background and 50% transparent black border
    } bg-opacity-1`}
>
        <div className='flex w-[50%] items-center '>
         
         <h1>LOGO</h1>
        </div>
        <div className='flex   w-[15%] justify-between  '>
        <SignedOut>
            

            <SignInButton />
          

        </SignedOut>

          <SignedIn >


            <UserButton showName={true} />

          </SignedIn>


          <ModeToggle />

        </div>
      </div>
  )
}

export default NavBar