import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { RequestStatus } from '../utility/common';
import localLinks from './localLinksData';
import globalLinks from './ourLinksData';

export const store = configureStore({
  reducer: {
    localLinks,
    globalLinks,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type StateWithStatus = {
  status: RequestStatus;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type { StateWithStatus };
