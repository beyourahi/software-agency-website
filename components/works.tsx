import { Works as WorkProps } from "../types";
import { Work } from "./work";

export const Works: React.FC<WorkProps> = ({ works }) => (
  <div>
    {works.map((work, index) => (
      <Work work={work} key={index} />
    ))}
  </div>
);
