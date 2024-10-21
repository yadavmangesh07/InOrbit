import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { SignIn, SignUp, UserProfile, useUser } from "@clerk/clerk-react"


import HomePage from './components/HomePage';
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
                      <HomePage />
                    </>
                      : <HeroPage />

                  }
                </>


              } />
            <Route path="/signup" element={<SignUp fallbackRedirectUrl={'/'} />} />
            <Route path="/signin" element={<SignIn fallbackRedirectUrl={'/'} />} />
            <Route path='/userprofile' element={<UserProfile/>} />


          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
