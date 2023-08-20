import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from '../../utility/common';
import { RootState } from '../root';
import { ShortUrl } from '../../models/ShortUrl';

type State = {
  globalLinksData: ShortUrl[];
  currentPage: number;
  status: RequestStatus;
};

const initialState: State = {
  globalLinksData: [],
  currentPage: 1,
  status: 'idle',
};

const globalLinksDataSlice = createSlice({
  name: 'globalLinksDataSlice',
  initialState,
  reducers: {
    dropState: () => initialState,
    saveGlobalLinks: (state, action: PayloadAction<ShortUrl[]>) => {
      state.globalLinksData = action.payload;
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

const selectSelf = (state: RootState) => state.globalLinks.data;

const getOurLinksData = createSelector(selectSelf, ({ ...globalLinksData }) => globalLinksData);

export const { saveGlobalLinks, changeCurrentPage } =
globalLinksDataSlice.actions;

export { getOurLinksData };
export default globalLinksDataSlice.reducer;
