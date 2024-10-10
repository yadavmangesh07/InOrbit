import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from './ui/mode-toggle'
import { useTheme } from './ui/Theme-provider';
import { CodeXml, BookUser, Handshake } from 'lucide-react';
import CodingProfiles from './CodingProfiles';
import { useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { SetGoal } from './SetGoal';


const NavBar = () => {
  const { theme } = useTheme();
  const { user } = useUser();
  return (
    <div
      className={`ml-[5rem]  mr-[5rem] mb-[3rem] flex  justify-between p-[.5rem] border-[.5px] rounded-md drop-shadow-xl backdrop-blur ${theme === 'dark'
        ? 'bg-[rgba(31,31,35,0.1)] text-white border-[rgba(255,255,255,0.5)]'  // 10% opaque dark background and 50% transparent white border
        : 'bg-[rgba(255,255,255,0.1)] text-black border-[rgba(42,75,52,0.5)]' // 10% opaque light background and 50% transparent black border
        } bg-opacity-1`}
    >
      <div className="flex w-[33%] items-center">
        <span className='font-medium text-sm'>Logo</span>
      </div>
      <SignedIn>
      <div className='flex items-center'>

<SetGoal />

</div>
      </SignedIn>
      <div className="flex  w-[33%] justify-end items-center">


        <span >
          <SignedOut>
            <Button variant="outline" className='font-medium '>
              <SignInButton />
            </Button>
          </SignedOut>
        </span>

        <span className='flex justify-between '>
          <SignedIn>

            <p className='flex items-center '>{user?.username}</p>
            <span className='ml-[.5rem]'>
              <UserButton >

                {/* Coding Profiles with xmlcode icon */}
                <UserButton.UserProfilePage label="Coding Profiles" url="profiles" labelIcon={<CodeXml size={18} />}>
                  <CodingProfiles />
                </UserButton.UserProfilePage>

                {/* Professional Details with profile icon */}
                <UserButton.UserProfilePage label="Professional Details" url="details" labelIcon={<BookUser size={18} />} >
                  <h1>Professional Details</h1>
                </UserButton.UserProfilePage>
                <UserButton.UserProfilePage label="Connections" url="connections" labelIcon={<Handshake size={18} />} >
                  <h1>Connections</h1>
                </UserButton.UserProfilePage>



              </UserButton>
            </span>
          </SignedIn>
          <span className='ml-[.5rem]'>
          <ModeToggle />
          </span>
        </span>





      </div>
    </div>
  );
};

export default NavBar;
