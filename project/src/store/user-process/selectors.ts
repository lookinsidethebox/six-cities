import { NameSpace } from '../../const';
import { State } from '../../types/State';
import { UserData } from '../../types/Auth';
import { AuthorizationStatus } from '../../const';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authStatus;
export const getUserData = (state: State): UserData | null => state[NameSpace.User].user;
