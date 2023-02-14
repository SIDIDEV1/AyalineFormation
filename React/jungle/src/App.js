import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className='bg-gray-100 p-10 flex-1'>
      <Banner />
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  );
}

export default App;
