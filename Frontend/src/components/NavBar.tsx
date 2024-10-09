import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from './ui/mode-toggle'

const NavBar = () => {
  return (
    <div className='ml-[5rem] mr-[5rem] mb-[5rem] flex justify-between '>
        <div className='flex w-[50%] '>
         
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