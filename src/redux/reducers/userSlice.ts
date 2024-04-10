import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser, IUsers } from '../../interfaces/IUser';
import { asyncFetchUsers } from '../actionsCreators/asyncFetchUsers';

const usersState: IUsers = {
  users: [],
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })
      .addCase(asyncFetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(asyncFetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as unknown as string;
      });
  },
});

export default usersSlice.reducer;
