import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp,useUser } from "@clerk/clerk-react"

import NavBar from './components/NavBar';
import { Charts } from './components/HomePage';
import { NavigationMenuDemo } from './components/HeroPage';




function App() {
  const { user } = useUser();

  return (
    <>
      <div className='fixed bottom-0 w-full'>
      <NavBar />
      </div>
      <BrowserRouter>

        <div className='flex justify-center mt-[2rem]'>
          <Routes>

            <Route path="/" element={
              <>
              {
                user ?<>
                <Charts/>
                

                </>
                  : <NavigationMenuDemo/>
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
