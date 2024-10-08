import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignedIn, SignIn, SignUp, UserProfile } from "@clerk/clerk-react"
import { ModeToggle } from './components/ui/mode-toggle';



function App() {

  return (
    <BrowserRouter>
    <div className='flex justify-end m-[1rem]'><ModeToggle /></div>

      <div className='flex justify-center mt-[2rem]'>
        <Routes>

          <Route path="/" element={
            <h1>
              hello world
            </h1>
          } />
          <Route path="/signup" element={<SignUp fallbackRedirectUrl={'/userprofile'} />} />
          <Route path="/signin" element={<SignIn fallbackRedirectUrl={'/userprofile'} />} />
          <Route path="/userprofile" element={
            <SignedIn>
              <UserProfile />
            </SignedIn>
            } />

        </Routes>
      </div>





    </BrowserRouter>
  )
}

export default App
