import React, {
// useEffect,
// useState
} from 'react';
// import axios from 'axios';
// import { User } from './types/types';
// import UserItem from './User/User';
import Sidebar from './Components/Sidebar/Sidebar';
import ProductsFilter from './Components/ProductsFilter/ProductsFilter';
import ProductsList from './Components/ProductsList/ProductsList';
import Navbar from './Components/Navbar/Navbar';
import PageTitle from './Components/PageTitle/PageTitle';
import Cart from './Components/Cart/Cart';

const App = (): JSX.Element => {

  // useEffect(() => {
  //   (async function () {
  //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  //     setUsers([ ...data ]);
  //   })();
  // }, []);

  // const [ users, setUsers ] = useState<Array<User> | undefined>();

  return(
    <div className="App">

      <Navbar />

      <div className="main">
        <div className={'wrapper'}>
          <div className={'header gutters'}>
            <PageTitle />
            <ProductsFilter />
          </div>
          <div className={'content gutters'}>
            <Sidebar />
            <ProductsList />
          </div>
        </div>

      </div>

      <Cart />

    </div>
  );
};

export default App;
