import React, { useState, useRef } from "react";
import {
  SpottaLogo,
  SpottaDarkLogo,
  SaveIcon,
  ShareIcon,
  LeftIcon,
  RightIcon,
  NgLogo,
} from "../../../public";
import { ModeToggler } from "../mode-toggler";
import { ProfileImage } from "../../../public";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import FilterCard from "./filter-card";
import { CreateReviewModal } from "@/components/createReviewModal";
import { useDisclosure } from "@/hooks";
import { ReviewFormData } from "../createReviewModal/types";

interface ReviewOnSubmitProps {
  reviewOnSubmit: (data: ReviewFormData) => void;
}

const SearchHeader = ({ reviewOnSubmit }: ReviewOnSubmitProps) => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [searchInput, setSearchInput] = useState("");
  const locationListRef = useRef<HTMLDivElement | null>(null);

  const handleModeToggle = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  const handleSearchInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(event.target.value);
  };

  const locations = [
    "Schools",
    "Hospitals",
    "Resort Park",
    "Shopping Malls",
    "Airport",
    "Train Station",
    "Nightlife",
    "Public Wifi",
    "Parking Lot",
    "Security",
    "Public Transport",
    "Bus Station",
    "Quiet",
  ];

  const scrollLeft = () => {
    if (locationListRef.current) {
      locationListRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (locationListRef.current) {
      locationListRef.current.scrollLeft += 100;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onActionCreateReview = () => {
    onClose();
  };

  const onActionOpenModal = () => {
    onOpen();
  };

  return (
    <div className="bg-[#F2F6FD] px-[100px] py-2.5 fixed top-0 z-50  w-full  dark:bg-brand-dark">
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          <p className="text-[10px] font-black tracking-[5px]">SPOTTA</p>
          <span>
            <NgLogo />
          </span>
        </div>
        <div>
          <Input
            type="search"
            placeholder="Enter Address"
            leftIcon={<Search height={12} />}
            className="dark:bg-[#242428] w-[700px]"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="flex items-center">
          <div>
            <ModeToggler
              onToggle={handleModeToggle}
              selectedTheme={selectedTheme}
            />
          </div>
          <div className="ml-6">
            <div className="flex font-semibold text-sm items-center">
              <div>Welcome!</div>
              <div className="ml-2">
                <ProfileImage />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[22px] font-medium">
            Bonny and Clyde Street, Ajao Estate, Lagos
          </p>
          <p className="text-sm">
            <span className="font-medium">&quot;450&quot; Reviews </span>
            (People are raving about the selected location)
          </p>
        </div>
        {searchInput === "" && (
          <div className="flex">
            <Button className="dark:text-white" onClick={onActionOpenModal}>
              LEAVE A REVIEW
            </Button>
            <Button
              variant={"ghost"}
              className="border-[1.5px] border-[#3366FF] px-4 py-3 mx-2"
            >
              <SaveIcon />
            </Button>
            <Button
              variant={"ghost"}
              className="border-[1.5px] border-[#3366FF] px-4 py-3"
            >
              <ShareIcon />
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center mt-4">
        <div
          onClick={scrollLeft}
          className="bg-white rounded-full px-[9px] py-1.5 cursor-pointer"
        >
          <LeftIcon />
        </div>
        <div className="flex overflow-x-auto mx-2" ref={locationListRef}>
          {locations.map((location, index) => (
            <FilterCard key={index} text={location} />
          ))}
        </div>
        <div
          onClick={scrollRight}
          className="bg-white rounded-full px-[9px] py-1.5 cursor-pointer"
        >
          <RightIcon />
        </div>
      </div>

      <CreateReviewModal
        isOpen={isOpen}
        onClose={onClose}
        onActionCreateReview={onActionCreateReview}
        isLoading={false}
        isError={false}
        reviewOnSubmit={reviewOnSubmit}
      />
    </div>
  );
};

export default SearchHeader;
