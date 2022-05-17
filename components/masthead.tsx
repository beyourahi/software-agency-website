import Image from "next/image"

export const Masthead: React.FC = () => (
  <section className={container}>
    {/* Video background */}
    <video autoPlay loop playsInline muted className="tw-w-full tw-h-full tw-object-cover tw-absolute">
      <source src="/assets/masthead-bg.mp4" type="video/mp4" />
      <source src="/assets/masthead-bg.webm" type="video/webm" />
    </video>

    {/* Logo */}
    <div className="tw-pt-10 tw-flex-grow-0 tw-transition-opacity tw-duration-1000">
      <Image src="/assets/logo.svg" alt="logo" width={128 / 3} height={114 / 3} />
    </div>

    {/* Center Text */}
    <div className="tw-text-white tw-p-10 tw-font-bold tw-z-10 tw-flex tw-flex-1 tw-flex-col tw-items-center tw-justify-center tw-drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] tw-text-center">
      <h1 className="tw-mb-6 tw-text-4xl xl:tw-text-5xl">Margelo</h1>
      <h2 className="tw-mb-2 tw-text-2xl xl:tw-text-3xl trackin-tight">App development done right</h2>
    </div>

    {/* Scroll down arrow */}
    <div className="tw-pb-20 tw-flex-grow-0 tw-transition-all tw-duration-1000 md:pb-10">
      <Image src="/assets/arrow-down.png" alt="scroll down" width={188 / 3} height={105 / 3} />
    </div>
  </section>
)

const container = "tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center"
