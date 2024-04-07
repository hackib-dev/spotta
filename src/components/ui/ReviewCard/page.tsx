import Image from "next/image";
import React from "react";
import { LikeIcon, UnlikeIcon, CommentIcon } from "../../../../public";

interface ReviewCardProps {
  profileImage: JSX.Element;
  username: string;
  datePosted: string;
  location: string;
  ratingImage: JSX.Element;
  reviewTitle: JSX.Element;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  profileImage,
  username,
  datePosted,
  location,
  ratingImage,
  reviewTitle,
  review,
}) => {
  return (
    <div className="bg-white min-w-50 h-fit rounded-lg p-4 dark:bg-[#18181B]">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>{profileImage}</div>
          <div className="flex flex-col ml-2">
            <div className="text-xs font-semibold">{username}</div>
            <div className="text-[8px]"> {datePosted}</div>
          </div>
        </div>

        <div>
          <div className="text-[11px]">{location}</div>
          <div> {ratingImage}</div>
        </div>
      </div>

      <div className="text-xs my-2.5">{review}</div>

      <div className="flex justify-between ">
        <div className="flex items-center">
          <LikeIcon />{" "}
          <span className="text-[10px] text-[#8F95B2] mx-1">24</span>
          <UnlikeIcon />{" "}
          <span className="text-[10px] text-[#8F95B2] mx-1">02</span>
          <CommentIcon />
          <span className="text-[10px] text-[#8F95B2] mx-1">125</span>
        </div>
        <div> {reviewTitle}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
