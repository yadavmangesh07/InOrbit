import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp, useUser } from "@clerk/clerk-react"

import NavBar from './components/NavBar';
import { Charts } from './components/HomePage';
import HeroPage from './components/HeroPage';




function App() {
  const { user } = useUser();

  return (
    <>

      <BrowserRouter>

        <div className='flex justify-center mt-[2rem]'>
          <Routes>

            <Route path="/"
              element={
                <>
                  {
                    user ? <>
                      <div className='fixed bottom-0 w-full'>
                        <NavBar />
                      </div>
                      <div className='z-[-1]'>
                      <Charts />
                      <Charts />
                      </div>
                    </>
                      : <HeroPage />

                  }
                </>


              } />
            <Route path="/signup" element={<SignUp fallbackRedirectUrl={'/'} />} />
            <Route path="/signin" element={<SignIn fallbackRedirectUrl={'/'} />} />


          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
