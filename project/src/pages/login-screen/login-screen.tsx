import React, { FormEvent, ChangeEvent } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { LoginData } from '../../types/Auth';
import { AuthorizationStatus, AppRoute } from '../../const';

function LoginScreen() : JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const authStatus = useAppSelector((state) => state.authStatus);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const fieldChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      const loginData : LoginData = {
        email: formData.email,
        password: formData.password
      };

      dispatch(loginAction(loginData));
    }
  };

  if (location.pathname === AppRoute.Login && authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={onSubmit} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" onChange={fieldChangeHandle} value={formData.email} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" onChange={fieldChangeHandle} value={formData.password} type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={`/?tab=${currentCity.name}`}
            >
              <span>{currentCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
