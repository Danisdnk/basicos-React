import React from 'react';

const Producto = ({ producto, carrito, agregarProducto, productos }) => {

    const { nombre, precio, id } = producto //aplico destructuring
    //Agregar compra al carrito 
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id);
        //modifico el state
        agregarProducto([
            ...carrito,
            ...producto
        ]);
    }
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        //modifico el state
        agregarProducto(
            productos
        );
    }

    return (
        <div >
            <h5>{nombre}</h5>
            <p>{precio}</p>
            {
                productos
                    ?
                    (
                        < button
                            type="button"
                            onClick={() => seleccionarProducto(id)}>
                            comprar
                        </button>
                    ) :

                    (
                        <button
                            type="button"
                            onClick={() => eliminarProducto(id)}>
                            Eliminar producto del carrito
                        </button>
                    )
            }

        </div >
    );
}

export default Producto;