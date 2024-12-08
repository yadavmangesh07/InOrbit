import { AnimatedBeamDemo } from "./AnimatedBeam"
import HeroPageNavBar from "./HeroPageNavBar"


const HeroPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex sticky w-full z-[1000]">
        <HeroPageNavBar />
      </div>
      <div className=" flex justify-center items-center mt-[2rem] mr-[4rem] ">
        <AnimatedBeamDemo />
      </div>






    </div>
  )
}

export default HeroPage