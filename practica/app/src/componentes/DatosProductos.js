import React, { useState, useEffect } from 'react';

export const DatosProductos = () => {
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
  const [filtroNombre, setFiltroNombre] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProductosFiltrados((prevProductos) => {
        if (prevProductos.length > 0) {
          return prevProductos.slice(0, -1);
        }
        clearInterval(intervalId);
        return prevProductos;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  useEffect(() => {
    
    setProductosFiltrados((prevProductos) => {
      return Object.values(productosAgrupados).filter(
        (producto) => producto.nombre_producto.toLowerCase().includes(filtroNombre.toLowerCase())
      );
    });
  }, [filtroNombre]);

  const handleFiltroNombreChange = (event) => {
    setFiltroNombre(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre"
        value={filtroNombre}
        onChange={handleFiltroNombreChange}
      />
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


