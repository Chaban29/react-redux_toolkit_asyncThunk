import { createAsyncThunk } from '@reduxjs/toolkit';

export const asyncFetchUsers = createAsyncThunk(
  'users/fetchALL',
  async (_, thunkApi) => {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    return usersResponse.json();
  }
);
