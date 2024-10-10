import CodingProfileCard from "./CodingProfileCard";

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




    </>
  )
}

export default CodingProfiles;
