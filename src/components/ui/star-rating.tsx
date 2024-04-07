import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  totalStars: number;
  selectedStars: number;
  handleStarClick: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  selectedStars,
  handleStarClick,
}) => {
  return (
    <div className="flex gap-2">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: "pointer" }}
          >
            {starValue <= selectedStars ? (
              <FaStar className="text-[#FFC70066] text-opacity-40" />
            ) : (
              <FaRegStar className="text-[#FFC70066] text-opacity-40" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
