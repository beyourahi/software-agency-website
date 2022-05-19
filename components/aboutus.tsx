import { Members } from "../types";
import { Member } from "./member";

export const Aboutus: React.FC<Members> = ({ members }) => (
  <section className="tw-bg-white tw-flex tw-flex-col tw-py-20 tw-text-3xl md:tw-text-4xl">
    {/* Heading */}
    <div className="tw-container tw-mx-auto tw-px-11">
      <p className="tw-leading-tight tw-max-w-5xl tw-mx-auto tw-text-4xl">
        <strong>We will help you ship better apps, faster.</strong> Our team of expert engineers has
        created the best user experiences in some of the most popular apps worldwide.
      </p>
    </div>

    {/* Our Team */}
    <div className="tw-container tw-mx-auto tw-px-11 tw-mt-28 tw-text-center">
      <h2 className="tw-font-bold">Our Team</h2>
      <div className="tw-mt-10 tw-grid tw-grid-cols-2 tw-gap-6 md:tw-grid-cols-3 lg:tw-grid-cols-4 xl:tw-grid-cols-5 lg:tw-gap-20">
        {members.map(member => (
          <Member
            id={member.id}
            name={member.name}
            socialId={member.socialId}
            link={member.link}
            key={member.id}
          />
        ))}
      </div>
    </div>
  </section>
);
