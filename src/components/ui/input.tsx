import * as React from "react";
import { FaLock, FaLockOpen, FaUnlock } from "react-icons/fa";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, type, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </span>
        )}
        <input
          type={type === "password" ? (show ? "text" : "password") : type}
          className={cn(
            "flex h-10 w-full rounded-md border bg-[#F3F7FE] border-[#D4DCF1] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
            leftIcon && "pl-8",
            rightIcon && "pr-12",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" || rightIcon ? (
          <span className="absolute inset-y-0 right-0 flex items-center pr-1">
            {!rightIcon && (
              <Button
                aria-label="toggle show password"
                onClick={handleClick}
                size="sm"
                type="button"
                variant="ghost"
                className="text-muted-foreground"
              >
                {show ? <FaLockOpen size="12" /> : <FaLock size="12" />}
              </Button>
            )}
            {rightIcon}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
