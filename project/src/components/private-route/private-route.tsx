import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector(getAuthStatus);

  return (authStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
