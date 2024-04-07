/* eslint-disable no-console */

"use client";

import _ from "lodash";
import { usePathname, redirect } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useToast } from "@/hooks/useToast";

const HOCLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const {
    user: { isAuthenticated, has2fa },
  } = useAppSelector((state) => state.userService);

  // // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (
  //     !isAuthenticated &&
  //     DASHBOARD_ROUTE.some((route) => pathname.startsWith(route))
  //   ) {
  //     return redirect("/login");
  //   }

  //   if (isAuthenticated && GUEST_ROUTES.includes(pathname)) {
  //     toast({
  //       variant: "destructive",
  //       title: "You are logged in",
  //     });
  //     redirect("/dashboard");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return children;
};

export default HOCLayout;
