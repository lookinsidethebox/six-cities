import { AuthorizationStatus } from '../../const';

type PrivateRouteWithPublicProps = {
  authorizationStatus: AuthorizationStatus;
  publicChild: JSX.Element;
  privateChild: JSX.Element;
}

function PrivateRouteWithPublic(props: PrivateRouteWithPublicProps): JSX.Element {
  const { authorizationStatus, publicChild, privateChild } = props;

  return (authorizationStatus === AuthorizationStatus.Auth
    ? privateChild
    : publicChild
  );
}

export default PrivateRouteWithPublic;
