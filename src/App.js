
import './App.css';
import  NavBar  from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      
        <NavBar>
        
        </NavBar> 
        <ItemListContainer
        saludo='Welcome to my E-commerce'
        />

    </div>
  );
}

export default App;
