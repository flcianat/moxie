import { projectData } from "@/app/data";
import Projects from "../components/project-main";

// Generate static params for the /projects/[id] route
export async function generateStaticParams() {
  const paths = projectData.map((project) => ({
    id: project.id.toString(), // Ensure the ID is a string
  }));

  return paths;
}

// Server-side logic to fetch the project details based on the ID
export default function ProjectPage({ params }) {
  const projectId = params.id;
  const detail = projectData.find((data) => data.id === Number(projectId));

  return <Projects detail={detail} />;
}
