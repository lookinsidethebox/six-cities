import { Link } from 'react-router-dom';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <main className="page__main page__main--index not_found_page">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </main>
  );
}

export default NotFoundScreen;
