import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from "@clerk/clerk-react"

import NavBar from './components/NavBar';



function App() {

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
                <h1 className='text-2xl tracking-wider'>Welcome to InOrbit...</h1>
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
