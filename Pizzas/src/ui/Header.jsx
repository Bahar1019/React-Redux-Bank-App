import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/userName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-8 border-stone-700 bg-yellow-700 px-4 py-3 text-xl font-extrabold uppercase tracking-widest text-stone-900 sm:px-6">
      <Link to="/">KRISPY PIZZA</Link>
      <SearchOrder></SearchOrder>
      <UserName></UserName>
    </header>
  );
}

export default Header;
