import React from "react";
import { ProjectItem } from "../data/work";
import ProjectDeviceDisplay from "./ProjectDeviceDisplay";

interface ProjectLaptopCardProps {
  project: ProjectItem;
  isReversed?: boolean;
}

export default function ProjectLaptopCard(props: ProjectLaptopCardProps) {
  return <ProjectDeviceDisplay {...props} />;
}
