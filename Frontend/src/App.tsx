import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, SignUp, UserButton, UserProfile } from "@clerk/clerk-react"
import { ModeToggle } from './components/ui/mode-toggle';
import { User } from 'lucide-react';
import { Button } from './components/ui/button';
import NavBar from './components/NavBar';



function App() {

  return (
    <>
 {/* I want this navbar to float at the bottom */}
      <div className='fixed bottom-0 w-full'>
      

      <NavBar />
      </div>
      <BrowserRouter>

        <div className='flex justify-center mt-[2rem]'>
          <Routes>

            <Route path="/" element={
              <>

                <h1 className='mt-[10rem]'>
                  Welcome to InOrbit...
                </h1>

              </>


            } />
            <Route path="/signup" element={<SignUp fallbackRedirectUrl={'/'} />} />
            <Route path="/signin" element={<SignIn fallbackRedirectUrl={'/'} />} />
            <Route path="/userprofile" element={
              <SignedIn>
                <UserProfile />

              </SignedIn>
            } />

          </Routes>
        </div>





      </BrowserRouter>
    </>
  )
}

export default App
