import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { State, AppDispatch } from '../types/State';
import { getAuthStatus } from '../store/user-process/selectors';
import { AuthorizationStatus } from '../const';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useIsAuthorized = () => {
  const authStatus = useAppSelector(getAuthStatus);
  return authStatus === AuthorizationStatus.Auth;
};
