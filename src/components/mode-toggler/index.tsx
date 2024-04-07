import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { SunIcon, MoonIcon } from "../../../public";
import { Switch } from "@/components/ui/switch";
import { useInitialRender } from "../../../hooks/useInitialRender";

interface ModeTogglerProps {
  onToggle: () => void;
  selectedTheme: string;
}

export function ModeToggler({ onToggle, selectedTheme }: ModeTogglerProps) {
  const { setTheme, theme } = useTheme();

  const initialRenderComplete = useInitialRender();

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <>
      {initialRenderComplete && (
        <div className="rounded-lg  flex gap-4 items-center ">
          <span className="text-[#828FA3]">
            <SunIcon />
          </span>
          <Switch
            className=""
            checked={theme === "dark"}
            onClick={handleThemeToggle}
          />
          <span className="text-[#828FA3]">
            <MoonIcon />
          </span>
        </div>
      )}
    </>
  );
}
