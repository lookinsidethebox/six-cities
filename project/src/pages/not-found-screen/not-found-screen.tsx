import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <section className="cities__places places">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </main>
  );
}

export default NotFoundScreen;
