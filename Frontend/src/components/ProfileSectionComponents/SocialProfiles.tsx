import { SheetHeader, SheetTitle, SheetDescription } from "../ui/sheet"
import SocialProfilesCards from "./SocialProfilesCards"

const SocialProfiles = () => {
  return (
    <>
    <SheetHeader>
          <SheetTitle className="text-xl sm:text-2xl text-left mt-1">Social Profile</SheetTitle>
          <SheetDescription className="sm:text-base text-left">
            Add or remove your social profiles here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <hr className="mt-2 mb-2"/>
        <SocialProfilesCards/>
    </>
  )
}

export default SocialProfiles
