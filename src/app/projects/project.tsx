import ProjectNotFound from "@/common/components/misc/ProjectNotFound";
import ProjectSection from "@/common/components/section/ProjectSection";
import { projectsData } from "../../common/resources/data/projects-data";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectKey } = useParams() as any;
  return projectsData[projectKey] ? (
    <ProjectSection projectData={projectsData[projectKey]}></ProjectSection>
  ) : (
    <ProjectNotFound></ProjectNotFound>
  );
}
