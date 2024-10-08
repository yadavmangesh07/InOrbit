
import LoginForm from "./components/LoginForm"
import { ModeToggle } from "./components/ui/mode-toggle"



function App() {

  return (
    <>
     <div className="m-2 flex justify-end">
     <ModeToggle />
     </div>

    <div className='m-5 flex justify-center'>
  {/* <CreateAccount /> */}
  <LoginForm />
  </div>
     
   
     
    </>
  )
}

export default App
