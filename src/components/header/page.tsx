"use client";

import { useState } from "react";
import { SpottaLogo, SpottaDarkLogo, NgLogo } from "../../../public";
import { ModeToggler } from "../mode-toggler";
import { useRouter } from "next/navigation";

const Header = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleModeToggle = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  const router = useRouter();

  const handleLoginButton = () => {
    router.push("/login");
  };

  const handleLogoButton = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-between px-5 md:px-[100px] py-2.5 items-center dark:bg-brand-dark fixed top-0 z-50  w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div>
        <div className="flex cursor-pointer" onClick={handleLogoButton}>
          <p className="text-[10px] font-black tracking-[5px]">SPOTTA</p>
          <span>
            <NgLogo />
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <ModeToggler
            onToggle={handleModeToggle}
            selectedTheme={selectedTheme}
          />
        </div>
        <div>
          <p
            className="text-[#5378F6] font-semibold text-sm tracking-widest ml-6 cursor-pointer"
            onClick={handleLoginButton}
          >
            LOGIN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
