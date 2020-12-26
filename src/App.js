import React, { Fragment, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Producto from './Components/Productos';
function App() {
  //Crear Listado de productos 
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa React Js', precio: 50 },
    { id: 2, nombre: 'Camisa Vue Js', precio: 30 },
    { id: 3, nombre: 'Camisa Node.Js', precio: 80 },
    { id: 4, nombre: 'Camisa Angular', precio: 50 },
  ]);

  const fecha = new Date().getFullYear();
  return (
    <Fragment>

      <Header
        titulo="tienda virtual" //prop que paso como destructuring
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
        key={producto.id}//valor unico
        producto={producto}/>

      ))}
      <Footer
        fecha={fecha} />

    </Fragment>
  );
}
export default App;
