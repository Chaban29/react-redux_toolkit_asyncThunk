import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import counterReducer from '../reducers/counterSlice';

const rootReducer = combineReducers({
  users: userReducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
