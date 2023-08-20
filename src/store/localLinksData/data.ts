import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../utility/common";
import { RootState } from "../root";
import { ShortUrl } from "../../models/ShortUrl";

type State = {
  localLinksData: ShortUrl[];
  status: RequestStatus;
};

const initialState: State = {
  localLinksData: [],
  status: "idle",
};

const localLinksDataSlice = createSlice({
  name: "localLinksDataSlice",
  initialState,
  reducers: {
    dropState: () => initialState,
    saveLocalLinks: (state, action: PayloadAction<ShortUrl>) => {
      state.localLinksData.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

const selectSelf = (state: RootState) => state.localLinks.data;

const getLocalLinksData = createSelector(
  selectSelf,
  ({ ...localLinksData }) => localLinksData
);

export const { saveLocalLinks } = localLinksDataSlice.actions;

export { getLocalLinksData };
export default localLinksDataSlice.reducer;
