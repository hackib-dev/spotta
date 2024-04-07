import React from "react";
import {
  FaRegCommentAlt,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";

interface ReviewCardProps {
  profileImage: JSX.Element;
  username: string;
  datePosted: string;
  ratingImage: string;
  review: string;
}

const ReviewContainer: React.FC<ReviewCardProps> = ({
  profileImage,
  username,
  datePosted,
  ratingImage,
  review,
}) => {
  return (
    <div className=" min-w-50 h-fit p-4 dark:bg-[#18181B]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>{profileImage}</div>
          <div className="flex ml-2 items-center">
            <div className="text-xs font-semibold">{username}</div>
            <div className="text-[11px] text-gray-900 dark:text-gray-400 text-opacity-60 ml-2">
              {datePosted}
            </div>
          </div>
        </div>

        <div>
          <div> {ratingImage}</div>
        </div>
      </div>

      <div className="text-xs my-2.5">{review}</div>

      <div className="flex justify-between ">
        <div className="flex items-center">
          <FaRegThumbsUp className="text-[#0D2159] dark:text-[#BACAF5]" />
          <span className="text-[10px] text-[#0D2159] mx-1 dark:text-[#BACAF5]">
            24
          </span>
          <FaRegThumbsDown className="text-[#0D2159] dark:text-[#BACAF5]" />
          <span className="text-[10px] text-[#0D2159] mx-1 dark:text-[#BACAF5]">
            02
          </span>
          <FaRegCommentAlt className="text-[#0D2159] dark:text-[#BACAF5]" />
          <span className="text-[10px] text-[#0D2159] mx-1 dark:text-[#BACAF5]">
            125
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
