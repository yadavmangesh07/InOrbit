import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import EditProfileTab from "./ProfileSectionComponents/EditProfileTab";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="yourprofile" className="w-[320px] md:w-auto mt-[1.5rem]">
      <TabsList className="grid md:w-full grid-cols-2">
        <TabsTrigger value="yourprofile">Your Profile</TabsTrigger>
        <TabsTrigger value="editprofile">Edit Profile</TabsTrigger>
      </TabsList>
      <TabsContent value="yourprofile">
        <p>Profile view</p> {/* Content for the "Your Profile" tab */}
      </TabsContent>
      <TabsContent value="editprofile">
        <EditProfileTab /> {/* Content for the "Edit Profile" tab */}
      </TabsContent>
    </Tabs>
  );
}
