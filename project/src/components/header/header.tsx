import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import React from 'react';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus, getUserData } from '../../store/user-process/selectors';

function Header() : JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const user = useAppSelector(getUserData);
  const isAuth = authStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  function logout() {
    dispatch(logoutAction());
  }

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
                isAuth &&
                <React.Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{user?.email}</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/" onClick={() => logout()}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </React.Fragment>
              }
              {
                !isAuth &&
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
