import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'LOADING';
  return (
    <div className="grid h-screen grid-rows-[auto_fr_auto]">
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <div className="overflow-scroll">
        <main className="ma-w-3xl mx-auto">
          <Outlet></Outlet>
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
