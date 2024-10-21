import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DatePickerDemo } from "./ui/DatePickerDemo"
import UploadResume from "./UploadResume"
import { ComboBoxBranch } from "./ui/ProfileSectionComponents/ComboBoxBranch"
import { ComboBoxYear } from "./ui/ProfileSectionComponents/ComboBoxYear"


export function ProfileForm() {
  return (

    <>
      <Sheet>
        <SheetTrigger asChild>
          <span className="font-normal text-sm ml-5">Profile</span>
        </SheetTrigger>
        <SheetContent className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[970px] overflow-scroll">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex justify-between font-medium text-xl mt-4">
            Personal Details
            <UploadResume />
          </div>
          <hr className="mt-2" />
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
            <span className="font-medium text-xl">Academic Details</span>
            <hr className="mt-2" />
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
                  placeholder="6"
                  className="col-span-3"
                />

                <Label htmlFor="agg-cgpa" className="w-32 md:w-auto md:text-right">
                  Agg. CGPA :
                </Label>
                <Input
                  id="agg-cgpa"
                  type="number"
                  placeholder="8.5"
                  className="col-span-3"
                />
              </div>


            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save Changes</Button>
            </SheetClose>
          </SheetFooter>

        </SheetContent>


      </Sheet>

    </>

  )
}
