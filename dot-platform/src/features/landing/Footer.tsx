import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="flex justify-between bg-red-100">
      <div>
        <ul>
          <li>Products</li>
          <li>Payments</li>
          <li>Subscriptions</li>
          <li>Connect</li>
        </ul>
        <ul>
          <li>Developers</li>
          <li>Payments</li>
          <li>Subscriptions</li>
          <li>Connect</li>
        </ul>
        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};
