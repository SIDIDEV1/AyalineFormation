import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import QuestionForm from './components/QuestionForm';

function App() {
  return (
    <div className='bg-gray-100 '>

      <div className='p-10 flex-1 max-w-xl mx-auto'>
        <Banner />
        {/* <Cart /> */}
        {/* <ShoppingList /> */}
        <QuestionForm />
      </div>
    </div>
  );
}

export default App;
