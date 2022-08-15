import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
import PrivateRoute from '../private-route/private-route';
import PrivateRouteWithPublic from '../private-route/private-route-with-public';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const offersLoaded = useAppSelector((state) => state.offersLoaded);

  if (!offersLoaded) {
    return(<Spinner />);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesScreen favorites={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRouteWithPublic
              publicChild={<PropertyNotLoggedScreen offers={offers} />}
              privateChild={<PropertyScreen offers={offers} />}
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
