import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../store/user-process/selectors';
import { getFavoriteOffersCount } from '../../store/favorite-process/selectors';
import { useIsAuthorized } from '../../hooks';

function Header() : JSX.Element {
  const user = useAppSelector(getUserData);
  const isAuthorized = useIsAuthorized();
  const dispatch = useAppDispatch();
  const favoriteOffersCount = useAppSelector(getFavoriteOffersCount);

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuthorized &&
                <React.Fragment>
                  <li className="header__nav-item user">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <span className="header__user-name user__name">{user?.email}</span>
                    </Link>
                    <span className="header__favorite-count">{favoriteOffersCount}</span>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/" onClick={onLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </React.Fragment>
              }
              {
                !isAuthorized &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
