/* eslint-disable no-param-reassign */

"use client";

import * as z from "zod";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionStorageName } from "@/app/config";

let sessionStorageState;
if (typeof window !== "undefined") {
  sessionStorageState = sessionStorage.getItem(sessionStorageName);
}

const UserSchema = z.object({
  firstName: z.string(),
  has2fa: z.boolean(),
  token: z.string(),
  walletBalance: z.number(),
  ttl: z.number(),
  role: z.string().nullable(),
  isAuthenticated: z.boolean(),
  clientId: z.string(),
});

type User = z.infer<typeof UserSchema>;

interface UserState {
  user: Partial<User>;
}

const initialState: UserState = sessionStorageState
  ? {
      user: { ...JSON.parse(sessionStorageState) },
    }
  : {
      user: {
        isAuthenticated: false,
      },
    };

const userServiceSlice = createSlice({
  name: "userService",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...action.payload,
      };
      sessionStorage.setItem(
        sessionStorageName,
        JSON.stringify(action.payload)
      );
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state?.user) {
        state.user = { ...state.user, ...action.payload };
        sessionStorage.setItem(sessionStorageName, JSON.stringify(state.user));
      }
    },
    logoutUser: (state) => {
      state.user = {
        ...{
          isAuthenticated: false,
        },
      };
      sessionStorage.clear();
    },
  },
});

export const { setUser, updateUser, logoutUser } = userServiceSlice.actions;

export default userServiceSlice.reducer;
