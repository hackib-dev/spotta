import * as z from "zod";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const GlobalDataSchema = z.object({
  cif: z.string(),
});

type GlobalStateType = z.infer<typeof GlobalDataSchema>;

const initialState: GlobalStateType = {
  cif: "",
};

type GlobalStatePayload = {
  dataKey: keyof GlobalStateType;
  data: any;
};

const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setGlobalState: (
      state: GlobalStateType,
      action: PayloadAction<GlobalStatePayload>
    ) => {
      const { dataKey, data } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state[dataKey] = data;
    },
  },
});

export const { setGlobalState } = globalStateSlice.actions;

export default globalStateSlice.reducer;
