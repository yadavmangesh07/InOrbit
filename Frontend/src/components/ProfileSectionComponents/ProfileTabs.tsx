import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import EditProfileTab from "./EditProfileTab";
import CodingProfiles from "./CodingProfiles";
import {  CodeXml, Send, UserRoundCheck, UserRoundPen } from "lucide-react";
import SocialProfiles from "./SocialProfiles";

export function ProfileTabs() {
  
  return (
    <Tabs defaultValue="yourprofile" className="w-[320px] md:w-auto mt-[1.5rem]">
      <TabsList className="grid md:w-full grid-cols-4">
        <TabsTrigger
          value="yourprofile"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
        >
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Your Profile</span>
            <UserRoundCheck size={20} className="sm:block"></UserRoundCheck>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="editprofile"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
        >
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Edit Profile</span>
            <UserRoundPen size={20} className="sm:block"></UserRoundPen>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="codingprofiles"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
        >
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Coding Profiles</span>
            <CodeXml size={20} className="sm:block"></CodeXml>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="socialprofiles"
          className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
        >
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Social Profiles</span>
            <Send size={20} className="sm:block"></Send>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="yourprofile">
        <p>Profile view</p> {/* Content for the "Your Profile" tab */}
      </TabsContent>
      <TabsContent value="editprofile">
        <EditProfileTab /> {/* Content for the "Edit Profile" tab */}
      </TabsContent>
      <TabsContent value="codingprofiles">
        {/* Content for the "Coding Profiles" tab */}
        <CodingProfiles />
      </TabsContent>
      <TabsContent value="socialprofiles">
        {/* Content for the "Social Profiles" tab */}
        <SocialProfiles/>
      </TabsContent>
    </Tabs>
  );
}
