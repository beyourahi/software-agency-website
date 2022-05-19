import Image from "next/image";
import { Member as MemberProps } from "../types";

export const Member: React.FC<MemberProps> = ({ id, name, socialId, link }) => (
  <div>
    <Image src={`/assets/team/margelo_faces_${id}.svg`} alt={name} width={1366} height={1555} />

    <div className="tw-text-2xl xl:tw-text-3xl">{name}</div>

    <div className="tw-text-xl">
      <a href={link} target="_blank" rel="noreferrer">
        {socialId}
      </a>
    </div>
  </div>
);
