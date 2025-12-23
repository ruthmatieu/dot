import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="flex justify-between bg-red-200">
      <p className="text-xl font-bold">Dot</p>
      <Link to="/login">Login</Link>
    </nav>
  );
};
