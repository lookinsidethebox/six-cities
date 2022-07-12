import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
import PrivateRoute from '../private-route/private-route';
import PrivateRouteWithPublic from '../private-route/private-route-with-public';

type AppScreenProps = {
  placesCount: number;
  placeName: string;
  cities: string[];
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen cities={props.cities} placeName={props.placeName} placesCount={props.placesCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen city={props.placeName} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRouteWithPublic
              authorizationStatus={AuthorizationStatus.NoAuth}
              publicChild={<PropertyNotLoggedScreen />}
              privateChild={<PropertyScreen />}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
