import { Review as ReviewProps } from "../types";

export const Review: React.FC<{ review: ReviewProps }> = ({ review }) => (
  <div className="tw-text-white tw-max-w-md tw-text-center tw-flex tw-flex-col tw-gap-8">
    <div className="tw-text-xl tw-font-medium tw-leading-relaxed">
      &ldquo;<span>{review.review}</span>&rdquo;
    </div>
    <div className="tw-text-xl">— {review.person}</div>
  </div>
)
