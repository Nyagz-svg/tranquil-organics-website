import { Star } from "lucide-react";

export default function ReviewCard({
  quote,
  review,
  name,
  detail,
  productUsed,
  hairConcern,
  date,
  rating = 5,
}) {
  const reviewText = review ?? quote;
  const secondaryDetail = productUsed ?? detail;

  return (
    <article className="review-card">
      <span className="verified-label">Verified customer</span>
      <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p>"{reviewText}"</p>
      <div>
        <strong>{name}</strong>
        {secondaryDetail && <span>Product used: {secondaryDetail}</span>}
        {hairConcern && <span>Hair concern: {hairConcern}</span>}
        {date && <span>{date}</span>}
      </div>
    </article>
  );
}
