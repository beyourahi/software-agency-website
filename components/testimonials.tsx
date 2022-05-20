import { Reviews } from "../types";
import { Review } from "./review";

export const Testimonials: React.FC<Reviews> = ({ reviews }) => (
  <section className="tw-min-h-[90vh] tw-py-20">
    {reviews.map((review, index) => (
      <Review review={review} key={index} />
    ))}
  </section>
)
