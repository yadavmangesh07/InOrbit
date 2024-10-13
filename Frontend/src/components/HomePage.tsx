import { DashBoard } from "./DashBoard"
import NavBar from "./NavBar"
import { SearchBar } from "./SearchBar"

function HomePage() {
  return (
    <>
    <div className="fixed mt-[-1rem]">

    <SearchBar />
    </div>
    <div className='fixed bottom-0 w-full'>
    <NavBar />
  </div>
  <div className='z-[-1] mt-5'>
  <DashBoard />
  <DashBoard />
  </div>
  </>
  )
}

export default HomePage
