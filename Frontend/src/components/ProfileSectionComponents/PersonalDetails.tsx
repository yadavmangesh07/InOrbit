import { CircleUserRound } from "lucide-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import UploadResume from "./UploadResume"
import { DatePickerDemo } from "./DatePickerDemo"

const PersonalDetails = () => {
  return (
    <>
    <div className="flex justify-between font-medium text-xl mt-4">
        <div className="flex items-center gap-2 text-base sm:text-xl "><CircleUserRound></CircleUserRound>Personal Details</div>
        <UploadResume />
      </div>
      <hr className="mt-2 mb-4" />
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
          <Label htmlFor="dob" className="md:text-left col-span-1 sm:ml-4">
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
    </>
  )
}

export default PersonalDetails
