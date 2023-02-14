import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import QuestionForm from './components/QuestionForm';
import { useState } from "react"


function App() {
  const [panier, updatePanier] = useState([])

  return (
    <div className='bg-gray-100'>

      <div className='p-10 flex-1 max-w-xl mx-auto h-full'>
        <Banner />
        <Cart panier={panier} updatePanier={updatePanier} />
        <div className='bg-yellow-200 mt-10'>
          <ShoppingList panier={panier} updatePanier={updatePanier} />
        </div>
        {/* <QuestionForm /> */}
      </div>
    </div>
  );
}

export default App;
