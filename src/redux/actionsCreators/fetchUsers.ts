import { usersSlice } from '../reducers/userSlice';
import { AppDispatch } from '../store/store';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = await usersResponse.json();
    dispatch(usersSlice.actions.usersFetchingSuccess(data));
  } catch (error) {
    dispatch(usersSlice.actions.usersFetchingError(`Fetching error, ${error}`));
  }
};
