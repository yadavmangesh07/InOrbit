import { Input } from "../input"
import { Label } from "../label"
import { Textarea } from "../textarea"

const ProjectDetails = () => {
    
        
  return (
    <>
    <div className="grid sm:grid-cols-2 gap-4 pl-1">
            <div className="flex items-center">
              <Label className="min-w-max" >Project Title :</Label>
              <Input className="ml-2 flex-grow" placeholder="Title"></Input>
            </div>
            <div className="flex items-center">
              <Label className="min-w-max">Project Link :</Label>
              <Input className="ml-2 flex-grow" placeholder="Link"></Input>
            </div>
          </div>
          <div className="pl-1 gap-2">
          <Label>Project Description :</Label>
          <Textarea className="mt-2" placeholder="Your project description here....." />
          </div>
          <hr className="mt-4 mb-4"/>
      
    </>
  )
}

export default ProjectDetails
