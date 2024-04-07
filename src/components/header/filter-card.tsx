import React from "react";
import { Button } from "../ui/button";

interface FilterCardProps {
  text: string;
}

const FilterCard: React.FC<FilterCardProps> = ({ text }) => {
  return (
    <div>
      <Button
        variant={"ghost"}
        size={"filter"}
        className="border border-[#1E1E1E] dark:border-white mr-1.5"
      >
        {text}
      </Button>
    </div>
  );
};

export default FilterCard;
