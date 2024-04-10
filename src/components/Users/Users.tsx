import { FC, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { asyncFetchUsers } from '../../redux/actionsCreators/asyncFetchUsers';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export const Users: FC = () => {
  const { users, error, isLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncFetchUsers());
  }, []);

  return (
    <div>
      {isLoading && <>Loading...</>}
      {error && <>Error...</>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};
