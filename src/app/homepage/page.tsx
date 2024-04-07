"use client";
import SearchHeader from "@/components/header/search-header";
import ReviewContainer from "@/components/ui/ReviewContainer/page";
import {
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
  NoReview,
  ProfileImage,
} from "../../../public";
import { ReviewFormData } from "@/components/createReviewModal/types";
import { useState } from "react";

const Homepage = () => {
  const [reviewResult, setReviewResult] = useState<ReviewFormData[]>([]);

  const reviewCallback = (data: ReviewFormData) => {
    setReviewResult((prevReviews) => [data, ...prevReviews]);
  };

  const formatDateTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="dark:bg-brand-dark h-[100vh] ">
      <div className="h-[30vh]">
        <SearchHeader reviewOnSubmit={reviewCallback} />
      </div>

      {reviewResult.length === 0 ? (
        <div className="px-[100px] flex h-[70vh] justify-center items-center">
          <div>
            <NoReview />
            <p className="mt-6 text-center">Oops! No review yet.</p>
          </div>
        </div>
      ) : (
        <div className="px-[100px] flex h-[70vh]">
          <div className="w-3/5 overflow-auto">
            <div className="grid grid-cols-1 gap-2 p-1">
              {reviewResult.map((review, index) => (
                <>
                  <ReviewContainer
                    key={index}
                    profileImage={<ProfileImage />}
                    username={`${review.anonymous ? "Anonymous" : "James T."}`}
                    datePosted={formatDateTime(new Date())}
                    ratingImage={`⭐${review?.selectedStars}.0`}
                    review={review.review}
                  />
                  <div className="border-[#D9D9D9] border"></div>
                </>
              ))}
            </div>
          </div>

          <div className="w-2/5 overflow-auto py-6">
            <div className="flex flex-wrap gap-2">
              <ImageOne />
              <ImageTwo />
              <ImageThree />
              <ImageFour />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
