import React, { useState, useEffect } from 'react';

const DatosProductos = () => {
  // Supongamos que productosAgrupados es el resultado de la función agrupar_productos
  const productosAgrupados = {
    'EAN1': {
      'nombre_producto': 'Producto A',
      'datos_query': [{/* ...datos... */}],
      'cantidad_mercados': 3,
      'rango_precios': {'mayor': 100, 'menor': 50}
    },
    'EAN2': {
      'nombre_producto': 'Producto B',
      'datos_query': [{/* ...datos... */}],
      'cantidad_mercados': 2,
      'rango_precios': {'mayor': 80, 'menor': 60}
    },
    'EAN3': {
      'nombre_producto': 'Producto C',
      'datos_query': [{/* ...datos... */}],
      'cantidad_mercados': 1,
      'rango_precios': {'mayor': 120, 'menor': 90}
    }
  };

  const [productosFiltrados, setProductosFiltrados] = useState(Object.values(productosAgrupados));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProductosFiltrados((prevProductos) => {
        if (prevProductos.length > 0) {
          return prevProductos.slice(0, -1);  // Eliminar el último producto cada segundo
        }
        clearInterval(intervalId);  // Detener la eliminación cuando no queden productos
        return prevProductos;
      });
    }, 1000);

    return () => clearInterval(intervalId);  // Limpiar intervalo al desmontar el componente
  }, []);  // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      {productosFiltrados.map((producto) => (
        <div key={producto.nombre_producto}>
          <h2>{producto.nombre_producto}</h2>
          <p>Rango de precios: {producto.rango_precios.menor} - {producto.rango_precios.mayor}</p>
          <p>Mercados diferentes: {producto.cantidad_mercados}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DatosProductos;
