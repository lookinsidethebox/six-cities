import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

type PrivateRouteWithPublicProps = {
  publicChild: JSX.Element;
  privateChild: JSX.Element;
}

function PrivateRouteWithPublic(props: PrivateRouteWithPublicProps): JSX.Element {
  const { publicChild, privateChild } = props;
  const authStatus = useAppSelector((state) => state.authStatus);

  return (authStatus === AuthorizationStatus.Auth
    ? privateChild
    : publicChild
  );
}

export default PrivateRouteWithPublic;
