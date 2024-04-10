import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  incrementCounter,
  decrementCounter,
} from '../../redux/reducers/counterSlice';

export const Counter: FC = () => {
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleIncrementCounter = () => {
    dispatch(incrementCounter(10));
  };

  const handleDecrementCounter = () => {
    if (!counter) return;
    dispatch(decrementCounter(5));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrementCounter}>Increment Counter</button>
      <button onClick={handleDecrementCounter}>Decrement Counter</button>
    </div>
  );
};
