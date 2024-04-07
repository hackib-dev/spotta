import React from "react";

interface ReviewTitleProps {
  title: string;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

const ReviewTitle: React.FC<ReviewTitleProps> = ({
  title,
  borderColor,
  backgroundColor,
  textColor,
}) => {
  const titleStyle: React.CSSProperties = {
    borderColor: borderColor || "black",
    backgroundColor: backgroundColor || "white",
    color: textColor || "black",
  };

  return (
    <div
      style={titleStyle}
      className="border w-fit rounded-full px-2 text-[9px]"
    >
      {title}
    </div>
  );
};

export default ReviewTitle;
