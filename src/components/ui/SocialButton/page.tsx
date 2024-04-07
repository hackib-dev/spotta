import React, { ReactNode } from "react";
import { Button } from "../button";

interface SocialButtonProps {
  icon: ReactNode;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text }) => {
  return (
    <Button variant={"ghost"} className="w-full border border-[#D8DAE5]">
      <span>{icon}</span>
      <span className="ml-3">{text}</span>
    </Button>
  );
};

export default SocialButton;
