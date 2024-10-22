import { SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet"

const SocialProfiles = () => {
  return (
    <>
    <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl text-left mt-1">Social Profile</SheetTitle>
          <SheetDescription className="sm:text-base text-left">
            Make changes to your profiles here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
    </>
  )
}

export default SocialProfiles
