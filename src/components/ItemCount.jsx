import React, {useState}  from 'react';
import '../styles/ItemCount.css'


const ItemCount = (props) => {

  const [numero, setNumero] = useState(props.inicial)
  const [boolSuma, setBoolSuma] = useState(true)
  const [boolAdd, setBoolAdd] = useState(true)



  const sumar = () =>{
    if (numero === props.stock){
      setBoolSuma (false);
  }else{
      setNumero(numero + 1);
      }
  };

  const restar = () =>{
      setNumero(numero - 1);
  };
 
 
  if (props.stock === 0){
      setBoolAdd (false);
  }
  
  return (
      <section className='containerCounter'> 
        <div className='containerButtons'>
           
            <p className='tamaninumero'><strong>{numero}</strong></p>
            <button onClick={restar}>-</button>
            <button disable={boolSuma} onClick={sumar}>+</button>
        </div>
        <div className='containerAdd'>
            <button disable={boolAdd}>onAdd</button>

        </div>

      </section>   
      
    
  )
}

export default ItemCount;


/*
- El número contador nunca puede superar el stock disponible
- De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
- Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la
cantidad seleccionada por el usuario*/