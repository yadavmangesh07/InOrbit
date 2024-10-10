import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import { ModeToggle } from './ui/mode-toggle'
import { useTheme } from './ui/Theme-provider';
import { CodeXml,BookUser, Handshake } from 'lucide-react';
import CodingProfiles from './CodingProfiles';

const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`ml-[5rem] mr-[5rem] mb-[5rem] flex w-auto justify-between p-[.5rem] border-[1.5px] rounded-md drop-shadow-xl backdrop-blur ${
        theme === 'dark'
          ? 'bg-[rgba(31,31,35,0.1)] text-white border-[rgba(255,255,255,0.5)]'  // 10% opaque dark background and 50% transparent white border
          : 'bg-[rgba(255,255,255,0.1)] text-black border-[rgba(42,75,52,0.5)]' // 10% opaque light background and 50% transparent black border
      } bg-opacity-1`}
    >
      <div className="flex w-[50%] items-center">
        <span>LOGO</span>
      </div>
      <div className="flex w-[15%] justify-between">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton showName={true}>

            {/* Coding Profiles with SquareTerminal icon */}
            <UserButton.UserProfilePage label="Coding Profiles" url="profiles" labelIcon={<CodeXml  size={18}/>}>
              <CodingProfiles />
            </UserButton.UserProfilePage>

            {/* Professional Details */}
             <UserButton.UserProfilePage label="Professional Details" url="details" labelIcon={<BookUser size={18}/>} >
              <h1>Professional Details</h1>
            </UserButton.UserProfilePage>
            <UserButton.UserProfilePage label="Friends" url="friends" labelIcon={<Handshake size={18}/>} >
              <h1>Friends</h1>
             </UserButton.UserProfilePage>



          </UserButton>
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
