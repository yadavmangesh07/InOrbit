import CodingProfileCard from "./CodingProfileCard";
import { Button } from "./ui/button";

const CodingProfiles = () => {
  return (
    <>
      <h5 className=" font-bold  mb-4">Add Your Coding Profiles</h5>
      <div>
       
        <CodingProfileCard  platformName="Leetcode"/>
        <CodingProfileCard  platformName="CodeChef"/>
        <CodingProfileCard  platformName="GeekForGeeks"/>
        <CodingProfileCard  platformName="Hackerrank"/>
        <CodingProfileCard  platformName="CodingNinjas"/>
        <CodingProfileCard  platformName="CodeForces"/>
        



      </div>
      <div className="mt-[4rem] flex justify-center items-center">
      <hr  />
        <Button variant="ghost" className="ml-[1rem] text-sm font-medium hover:text-[#EF4444]">
          <p className="text-[#EF4444]">Update</p>
        </Button>
      </div>




    </>
  )
}

export default CodingProfiles;
