"use client";

import React from "react";
import Header from "@/components/header/page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ReviewCard from "@/components/ui/ReviewCard/page";
import { ProfileImage, RatingImage } from "../../public";
import ReviewTitle from "@/components/ui/ReviewCard/review-title";

export default function Home() {
  return (
    <div className=" dark:bg-brand-dark h-[100vh] ">
      <div className="h-[10vh]">
        <Header />
      </div>

      <div className="px-5 md:px-[100px] flex h-[90vh]">
        <div className="w-full md:w-3/5 pr-0 md:pr-[145px] my-auto">
          <h1 className="text-[45px] md:text-6xl font-bold">
            Find a place you will love to live!
          </h1>
          <p className="text-lg md:text-[22px] my-10">
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>
          <Input
            type="search"
            placeholder="Enter Address"
            leftIcon={<Search height={12} />}
            className="dark:bg-[#242428]"
          />
          <Button className="mt-5 px-10 py-4 dark:text-white">Search</Button>
        </div>

        <div className="w-2/5  bg-[#D1D1D1] dark:bg-brand-dark  overflow-auto hidden md:block">
          <div className="grid grid-cols-2 gap-2 p-1">
            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"traffic"}
                  borderColor={"#A07C22"}
                  backgroundColor={"#F5E9CB"}
                  textColor={"#594510"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />
            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"traffic"}
                  borderColor={"#A07C22"}
                  backgroundColor={"#F5E9CB"}
                  textColor={"#594510"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />

            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"network"}
                  borderColor={"#AD307B"}
                  backgroundColor={"#FCDCEF"}
                  textColor={"#821958"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />
            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"traffic"}
                  borderColor={"#A07C22"}
                  backgroundColor={"#F5E9CB"}
                  textColor={"#594510"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />

            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"power"}
                  borderColor={"#F66A57"}
                  backgroundColor={"#F66A57"}
                  textColor={"#000000"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />
            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"water"}
                  borderColor={"#2863B8"}
                  backgroundColor={"#D1E4FA"}
                  textColor={"#1F4781"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />

            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"security"}
                  borderColor={"#6A498E"}
                  backgroundColor={"#E4CEFD"}
                  textColor={"#472270"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />
            <ReviewCard
              profileImage={<ProfileImage />}
              username="James T."
              datePosted="5 months ago"
              location="Ikate, Lekki"
              ratingImage={<RatingImage />}
              reviewTitle={
                <ReviewTitle
                  title={"road"}
                  borderColor={"#A07C22"}
                  backgroundColor={"#F5E9CB"}
                  textColor={"#594510"}
                />
              }
              review="There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
