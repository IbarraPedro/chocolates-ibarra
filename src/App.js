
import './App.css';
import  NavBar  from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>
    <div className="App">
      
        <NavBar>
        <CartWidget />
        </NavBar> 
        <ItemListContainer
        saludo='Welcome to my E-commerce'
        />
        <ItemCount stock={8} inicial={1} />

    </div>
    </>
  );
}

export default App;
