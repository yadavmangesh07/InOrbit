

import { CopyMinus, CopyPlus, FolderGit2 } from "lucide-react";
import { Button } from "../ui/button";
import ProjectDetails from "./ProjectSectionCard";
import { useState } from "react";
import { ToastAction } from "../ui/toast";
import { toast } from "@/hooks/use-toast";




const AddProjectSection = () => {
  const [projectList, setProjectList] = useState([
    { title: "", link: "", description: "" }
  ]);

  const addMoreProjects = () => {
    setProjectList([...projectList, { title: "", link: "", description: "" }]);
  };

  const removeLastProject = () => {
    if (projectList.length > 1) {
      setProjectList(projectList.slice(0, -1));
    }
  };

  const handleRemoveProject = () => {
    if (projectList.length === 1) {
      toast({
        variant: "destructive",
        title: "Cannot remove the last project",
        duration: 2000,
        description: "You must keep at least one project in your portfolio.",
        action: (
          <ToastAction altText="Okay">Dismiss</ToastAction>
        ),
      });
    } else {
      removeLastProject();
      toast({
        title: "Project Removed",
        description: "The last project was successfully removed.",
        variant: "success",
        duration: 2000,
      });
    }
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = projectList.map((project, idx) => {
      if (idx === index) {
        return { ...project, [field]: value };
      }
      return project;
    });
    setProjectList(updatedProjects);
  };
  
  

  return (
    <>
      <div className="flex items-center gap-2">
        <FolderGit2 />
        <span className="font-medium text-xl mt-2 mb-1">Project Details</span>
      </div>
      <hr className="mt-1 mb-2" />
      <div>
        {projectList.map((project, index) => (
          <ProjectDetails
            key={index}
            project={project}
            onProjectChange={(field, value) => handleProjectChange(index, field, value)}
          />
        ))}
        <div className="flex justify-center mt-4 space-x-2">
          <Button className="w-1/2 sm:w-1/5 gap-2" variant={'secondary'} onClick={addMoreProjects}>
            <CopyPlus size={18} color="green" /> Add More
          </Button>
          <Button className="w-1/2 sm:w-1/5 gap-2" variant={'secondary'} onClick={handleRemoveProject}>
            <CopyMinus size={18} color="red" /> Remove Last
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddProjectSection;
