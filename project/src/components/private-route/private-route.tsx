import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useIsAuthorized } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isAuthorized = useIsAuthorized();
  return (isAuthorized ? children : <Navigate to={AppRoute.Login} />);
}

export default PrivateRoute;
