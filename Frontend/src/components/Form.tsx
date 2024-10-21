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
import UploadResume from "./UploadResume"
const Form = () => {
  return (
    <div className="">



      <Sheet >
        <SheetTrigger asChild >
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-[360px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[970px] overflow-scroll">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex justify-between items-center font-medium text-xl mt-4">
            Personal Details
            <UploadResume />
          </div>
          <hr className="mt-2 mb-4" />
          <div className="grid gap-4 sm:grid-cols-4 items-center ml-3">
            <div className="flex sm:col-span-2 items-center space-x-2 ">
              <Label className="w-auto">First Name:</Label>
              <Input className="w-2/3" placeholder="Pedro"></Input>
            </div>
            <div className="flex sm:col-span-2 items-center space-x-2">
              <Label className="w-auto">Last Name:</Label>
              <Input className="w-2/3" placeholder="Dantis"></Input>
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>




    </div>
  )
}

export default Form
