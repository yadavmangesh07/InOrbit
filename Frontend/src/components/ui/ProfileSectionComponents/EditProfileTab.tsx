import UploadResume from "@/components/UploadResume"
import { Label } from "../label"
import { Input } from "../input"
import { DatePickerDemo } from "./DatePickerDemo"
import { RadioGroup, RadioGroupItem } from "../radio-group"
import { ComboBoxBranch } from "./ComboBoxBranch"
import { ComboBoxYear } from "./ComboBoxYear"
import { SheetClose, SheetFooter } from "../sheet"
import { Button } from "../button"
import ProjectDetails from "./ProjectDetails"
import { useState } from "react"


function EditProfileTab() {

  // State to manage multiple ProjectDetails components
  const [projectList, setProjectList] = useState([{}]); // Initially, one ProjectDetails component
      
  // Function to add more ProjectDetails components
  const addMoreProjects = () => {
    setProjectList([...projectList, {}]); // Add an empty object to simulate a new ProjectDetails
  };
 // Function to remove the last ProjectDetails component
  const removeLastProject = () => {
    if (projectList.length > 1) {
      setProjectList(projectList.slice(0, -1)); // Remove the last item
    }
  };
  return (
    <div>
      <div className="flex justify-between font-medium text-xl mt-4">
        Personal Details
        <UploadResume />
      </div>
      <hr className="mt-2 mb-4" />
      <div className="grid gap-4 py-4">
        {/* Existing layout */}
        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-8">
          <Label htmlFor="fname" className="md:text-right">
            First Name :
          </Label>
          <Input id="fname" placeholder="Pedro" className="col-span-3" />

          <Label htmlFor="lname" className="md:text-right">
            Last Name :
          </Label>
          <Input id="lname" placeholder="Duarte" className="col-span-3" />
        </div>



        {/* Continuing with the rest of the form */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
          <Label htmlFor="dob" className="md:text-left col-span-1">
            Date Of Birth:
          </Label>
          <div className="md:col-span-3 col-span-1">
            <DatePickerDemo />
          </div>

          <Label htmlFor="gender" className="flex flex-col md:text-right col-span-1">
            Gender:
          </Label>
          <div className="flex flex-col items-start col-span-1 md:col-span-3">
            <RadioGroup defaultValue="male" className="flex flex-row md:space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="gender-male" />
                <Label htmlFor="gender-male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="gender-female" />
                <Label htmlFor="gender-female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="gender-other" />
                <Label htmlFor="gender-other">Other</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-8">
          <Label htmlFor="email" className="md:text-right">
            Email :
          </Label>
          <Input
            id="email"
            type="mail"
            placeholder="Pedro@example.com"
            className="col-span-3"
          />

          <Label htmlFor="contact" className="md:text-right">
            Contact :
          </Label>
          <Input
            id="contact"
            type="number"
            placeholder="+91 "
            className="col-span-3"
          />
        </div>

        {/* Academic Details */}

        <span className="font-medium text-xl">Academic Details

        </span>
        <hr className="mt-1" />
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-8">
            <Label htmlFor="cname" className="md:text-right">
              College Name :
            </Label>
            <Input id="cname" placeholder="NIET" className="col-span-3" />

            <Label htmlFor="lname" className="md:text-right">
              Course :
            </Label>
            <Input id="lname" placeholder="Duarte" className="col-span-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-8 gap-4 items-center">
            <Label htmlFor="dob" className="w-auto md:text-left col-span-1">
              Graduated By :
            </Label>
            <div className="md:col-span-3 col-span-1">
              <DatePickerDemo />
            </div>

            <Label htmlFor="bname" className="md:text-right">
              Branch :
            </Label>
            <div>
              <ComboBoxBranch />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-8">
            <Label htmlFor="contact" className="md:text-right">
              Year Of Study :
            </Label>
            <div className="col-span-2 text-right md:text-left md:col-span-3">
              <ComboBoxYear />
            </div>

            <Label htmlFor="email" className="md:text-right">
              College Mail :
            </Label>
            <Input
              id="email"
              type="mail"
              placeholder="Pedro@example.com"
              className="col-span-3"
            />
          </div>
          {/* Additional label-input pairs for Current Sem and Agg. CGPA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 items-center gap-4">
            <Label htmlFor="current-sem" className="w-32 md:w-auto md:text-right">
              Current Sem :
            </Label>
            <Input
              id="current-sem"
              type="number"
              placeholder="Current Semester"
              className="col-span-3"
            />

            <Label htmlFor="agg-cgpa" className="w-32 md:w-auto md:text-right">
              Agg. CGPA :
            </Label>
            <Input
              id="agg-cgpa"
              type="number"
              placeholder="Enter CGPA"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">

            <div className="sm:flex col-span-2 items-center gap-4 sm:ml-[1.6rem] ">
              <Label >10th Marks :</Label>
              <Input placeholder="Enter Percentage %" className="sm:w-auto"></Input>
            </div>
            <div className="sm:flex col-span-2 items-center gap-4 sm:ml-[1.6rem] ">
              <Label >12th Marks :</Label>
              <Input placeholder="Enter Percentage %" className="sm:w-auto"></Input>
            </div>

          </div>


          <div>
            <span className="font-medium text-xl mt-2 block">Project Details</span>
            <hr className="mt-2 mb-3" />
            {/* Render ProjectDetails for each item in the projectList */}
      {projectList.map((_project, index) => (
        <ProjectDetails key={index} />
      ))}

      <div className="flex justify-center mt-4 space-x-2">
        <Button className="w-1/2 sm:w-1/5" onClick={addMoreProjects}>
          + Add More
        </Button>
        <Button className="w-1/2 sm:w-1/5" variant={"destructive"} onClick={removeLastProject}>
          - Remove Last
        </Button>
      </div>
          </div>















        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save Changes</Button>
        </SheetClose>
      </SheetFooter>







    </div>

  )
}

export default EditProfileTab
