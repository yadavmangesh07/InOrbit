
import { SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import { Button } from "../ui/button"


import PersonalDetails from "./PersonalDetails"
import AcademicDetails from "./AcademicDetails"
import AddProjectSection from "./AddProjectSection"


function EditProfileTab() {

 
  return (
    <>
    
    <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl text-left mt-1">Edit Profile</SheetTitle>
          <SheetDescription className="sm:text-base text-left">
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
    
      
      <div className="grid gap-4 py-4">
        {/* Personal Details */}
        <PersonalDetails />

        {/* Academic Details */}
       
        <div className="grid gap-4 py-4">
          <AcademicDetails />
        {/* Project Details */}
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
