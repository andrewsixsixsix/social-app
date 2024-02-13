import { useAppDispatch } from '@/store/hooks';
import { useLoginMutation } from '@/api/auth';
import { setUser } from '@/store/slices/user';
import { asyncStorage } from '@/utils';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [loginMutation, loginState] = useLoginMutation();

  const login = async (username: string, password: string) => {
    const { user, authToken } = await loginMutation({ username, password }).unwrap();
    dispatch(setUser(user));
    await asyncStorage.setAuthToken(authToken);
  };

  return { login, loginState };
};
