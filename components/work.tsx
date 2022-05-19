import { Work as WorkProps } from "../types";
import Image from "next/image";

interface Props {
  work: WorkProps;
}

export const Work: React.FC<Props> = ({ work }) => (
  <section className="tw-text-white tw-min-h-screen tw-w-full tw-flex tw-flex-col lg:tw-flex-row">
    {/* Left Section */}
    <div className="tw-w-full tw-h-[30vh] lg:tw-h-auto tw-flex tw-justify-center tw-items-center">
      <div>
        <div className="tw-text-3xl">{work.sentence1}</div>
        <div className="tw-text-4xl md:tw-text-5xl tw-font-semibold">
          <a href={work.link} target="_blank" rel="noreferrer">
            <span className="tw-underline tw-underline-offset-2 hover:tw-underline-offset-8">
              {work.brand}
            </span>
          </a>
          {work.sentence2}
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="tw-bg-white tw-w-full tw-flex tw-justify-center tw-items-center">
      <div className="tw-max-w-md tw-pt-10 lg:tw-pt-0 tw-px-10 md:tw-px-0">
        <Image src={work.image} alt="pinkpanda" width={840} height={1620} />
      </div>
    </div>
  </section>
);
