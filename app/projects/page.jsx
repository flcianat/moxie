"use client";

import ListProjects from "./components/list-projects";

export default function Projects() {
  return (
    <div className="capitalize">
      <h1 className="text-2xl font-medium mb-2">Projects</h1>

      <ListProjects />
    </div>
  );
}
