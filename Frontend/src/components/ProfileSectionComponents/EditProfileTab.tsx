
import { SheetClose, SheetFooter } from "../ui/sheet"
import { Button } from "../ui/button"


import PersonalDetails from "./PersonalDetails"
import AcademicDetails from "./AcademicDetails"
import AddProjectSection from "./AddProjectSection"


function EditProfileTab() {

 
  return (
    <>
      
      <div className="grid gap-4 py-4">
        {/* Existing layout */}
        <PersonalDetails />

        {/* Academic Details */}
       
        <div className="grid gap-4 py-4">
          <AcademicDetails />
          
        </div>
            <AddProjectSection/>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save Changes</Button>
        </SheetClose>
      </SheetFooter>
    </>

  )
}

export default EditProfileTab
