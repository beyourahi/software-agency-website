import Image from "next/image"

export const Work: React.FC = () => (
  <section className="tw-text-white tw-min-h-screen tw-w-full tw-flex tw-flex-col lg:tw-flex-row">
    {/* Left Section */}
    <div className="tw-w-full tw-h-[30vh] lg:tw-h-auto tw-flex tw-justify-center tw-items-center">
      <div>
        <div className="tw-text-3xl">We built</div>
        <div className="tw-text-4xl md:tw-text-5xl tw-font-semibold"><a href="https://pinkpanda.io/" target="_blank"><span className="tw-underline tw-underline-offset-2 hover:tw-underline-offset-8">Pink Panda</span></a>'s app.</div>
      </div>
    </div>

    {/* Right Section */}
    <div className="tw-bg-white tw-w-full tw-flex tw-justify-center tw-items-center">
      <div className="tw-max-w-md tw-pt-10 lg:tw-pt-0 tw-px-10 md:tw-px-0">
        <Image src="/assets/works/pinkpanda.png" alt="pinkpanda" width={840} height={1620} />
      </div>
    </div>
  </section >
)
