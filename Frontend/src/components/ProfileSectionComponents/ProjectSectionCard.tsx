import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ProjectDetailsProps {
  project: {
    title: string;
    link: string;
    description: string;
  };
  onProjectChange: (field: string, value: string) => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onProjectChange }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4 pl-1">
        <div className="flex items-center">
          <Label className="min-w-max">Project Title:</Label>
          <Input
            className="ml-2 flex-grow"
            placeholder="Title"
            value={project.title}
            onChange={(e) => onProjectChange("title", e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <Label className="min-w-max">Project Link:</Label>
          <Input
            className="ml-2 flex-grow"
            placeholder="Link"
            value={project.link}
            onChange={(e) => onProjectChange("link", e.target.value)}
          />
        </div>
      </div>
      <div className="pl-1 gap-2 mt-2">
        <Label>Project Description:</Label>
        <Textarea
          className="mt-2"
          placeholder="Your project description here....."
          value={project.description}
          onChange={(e) => onProjectChange("description", e.target.value)}
        />
      </div>
      <hr className="mt-4 mb-4" />
    </>
  );
};

export default ProjectDetails;
