import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tokenPersistConfig = {
  key: 'token',
  storage,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: { token: '' },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;

export const persistedTokenReducer = persistReducer(
  tokenPersistConfig,
  tokenSlice.reducer
);

export const tokenReducer = tokenSlice.reducer;
