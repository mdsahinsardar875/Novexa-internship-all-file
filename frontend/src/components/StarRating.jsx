import { Star } from "lucide-react";

const StarRating = ({ rating = 0, size = 14 }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating.toFixed ? rating.toFixed(1) : rating})</span>
    </div>
  );
};

export default StarRating;
