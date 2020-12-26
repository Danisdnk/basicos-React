import React from 'react';

const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto //aplico destructuring
    //Agregar compra al carrito 
    const seleccionarProducto = () => {
        console.log('comprando...'+id)
    }
    return (
        <div >
            <h5>{nombre}</h5>
            <p>{precio}</p>
            <button
                type="button"
                onClick={() =>seleccionarProducto(id)}>
                    comprar
            </button>
        </div>
    );
}

export default Producto;