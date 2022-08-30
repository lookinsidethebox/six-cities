import React, { FormEvent, ChangeEvent } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { LoginData } from '../../types/Auth';
import { AppRoute } from '../../const';
import { changeCity } from '../../store/data-process/data-process';
import { useIsAuthorized } from '../../hooks';
import { getRandomCity } from '../../utils';

function LoginScreen() : JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isAuthorized = useIsAuthorized();

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const [showError, setShowError] = React.useState(false);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/; //at least one digit and one letter

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setShowError(false);

    if (passwordRegex.test(formData.password))
    {
      if (formData.email && formData.password) {
        const loginData : LoginData = {
          email: formData.email,
          password: formData.password
        };

        dispatch(loginAction(loginData));
      }
    }
    else {
      setShowError(true);
    }
  };

  if (location.pathname === AppRoute.Login && isAuthorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  const randomCity = getRandomCity();
  const handleCityClick = () => dispatch(changeCity(randomCity));

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" onChange={handleFieldChange} value={formData.email} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" onChange={handleFieldChange} value={formData.password} type="password" name="password" placeholder="Password" required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
            {
              showError &&
              <div style={{ color: 'red', marginTop: '15px' }}>
                <strong>Неверный пароль!</strong> Пароль должен содержать как минимум одну букву и одну цифру.
              </div>
            }
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to="/"
              onClick={handleCityClick}
            >
              <span>{randomCity.name}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginScreen;
