import { Brands } from "@/types/brands_types"
import Image from "next/image"

export const Trustedby: React.FC<Brands> = ({ brands }) => (
  <section className="tw-bg-white tw-min-h-[60vh] tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-36 tw-text-center tw-gap-32">
    <div className="tw-max-w-[80vw] tw-flex tw-flex-col tw-gap-12">
      <h3 className="tw-text-2xl tw-font-bold">trusted by the apps on your phone</h3>
      <div className="tw-flex tw-justify-center tw-items-center tw-gap-10 tw-flex-wrap">
        {brands.map(brand => (
          <Image src={`/assets/trustedby/${brand}.png`} alt={brand} width={150} height={55} objectFit="contain" />
        ))}
      </div>
    </div>

    <div className="tw-text-4xl">
      <h2>We believe in good communication and a fully transparent development process.</h2>
    </div>
  </section>
)
