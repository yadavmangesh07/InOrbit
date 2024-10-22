import { GraduationCap } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { ComboBoxBranch } from "./ComboBoxBranch"
import { ComboBoxYear } from "./ComboBoxYear"
import { DatePickerDemo } from "./DatePickerDemo"

const AcademicDetails = () => {
  return (
   <>
   <div className="flex items-center gap-2"><GraduationCap></GraduationCap>
        <span className="font-medium text-xl">Academic Details
        </span></div>
        <hr className="mt-1" />
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


   </>
  )
}

export default AcademicDetails
