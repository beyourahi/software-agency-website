import { Works } from "@/types/work_types";
import { Work } from "./work";

export const Works: React.FC<Works> = ({ works }) => (
  <div>
    {works.map(work => <Work work={work} />)}
  </div>
)
