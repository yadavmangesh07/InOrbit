import { CopyMinus, CopyPlus, FolderGit2 } from "lucide-react";
import { Button } from "../ui/button";
import ProjectDetails from "./ProjectSectionCard";
import { useState } from "react";
import { ToastAction } from "../ui/toast";
import { toast } from "@/hooks/use-toast";

const AddProjectSection = () => {
    // State to manage multiple ProjectDetails components
  const [projectList, setProjectList] = useState([{}]); // Initially, one ProjectDetails component

  // Function to add more ProjectDetails components
  const addMoreProjects = () => {
    setProjectList([...projectList, {}]); // Add an empty object to simulate a new ProjectDetails
  };
  // Function to remove the last ProjectDetails component
  const removeLastProject = () => {
    if (projectList.length > 1) {
      setProjectList(projectList.slice(0, -1)); // Remove the last item
    }

  };


  const handleRemoveProject = () => {
    if (projectList.length === 1) {
      // Trigger destructive toast if only one project remains
      toast({
        variant: "destructive", // Red or warning-style toast
        title: "Cannot remove the last project",
        duration: 2000,
        description: "You must keep at least one project in your portfolio.",
        action: (
          <ToastAction altText="Okay">
            Dismiss
          </ToastAction>
        ),
      });


    } else {

      removeLastProject(); // Call function to remove the last project
      toast({
        title: "Project Removed",
        description: "The last project was successfully removed.",
        variant: "success", // Green or success-style toast
        duration: 2000,
      });
    }
  };
  return (
   <>
   <div className="flex items-center gap-2"><FolderGit2></FolderGit2>
            <span className="font-medium text-xl mt-2 mb-1 ">Project Details</span></div>
            <hr className="mt-1 mb-2" />
   <div >
            {/* Render ProjectDetails for each item in the projectList */}
            {projectList.map((_project, index) => (
              <ProjectDetails key={index} />
            ))}

            <div className="flex justify-center mt-4 space-x-2">
              <Button className="w-1/2 sm:w-1/5 gap-2" variant={'secondary'} onClick={addMoreProjects}>
                <CopyPlus size={18} > </CopyPlus>  Add More
              </Button>
              <Button className="w-1/2 sm:w-1/5 gap-2" variant={'secondary'} onClick={handleRemoveProject}>
                <CopyMinus size={18}></CopyMinus>Remove Last
              </Button>
            </div>
          </div>
   </>
  )
}

export default AddProjectSection
