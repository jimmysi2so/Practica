#a)	Escribir una función en Python que recorra los datos y agrupe los productos mediante su Ean en el siguiente diccionario 
def agrupar_productos(datos_query):
    productos_agrupados = {}

    for datos in datos_query:
        ean = datos['Ean']
        nombre_producto = datos['NombreProducto']
        precio = datos['PrecioMinimo']
        mercado = datos['NombreMercado']

        if ean not in productos_agrupados:
            productos_agrupados[ean] = {
                'nombre_producto': nombre_producto,
                'datos_query': [],
                'cantidad_mercados': set(),
                'rango_precios': {'mayor': float('-inf'), 'menor': float('inf')}
            }

        productos_agrupados[ean]['datos_query'].append(datos)
        productos_agrupados[ean]['cantidad_mercados'].add(mercado)

        # Actualizar el rango de precios
        if precio > productos_agrupados[ean]['rango_precios']['mayor']:
            productos_agrupados[ean]['rango_precios']['mayor'] = precio
        if precio < productos_agrupados[ean]['rango_precios']['menor']:
            productos_agrupados[ean]['rango_precios']['menor'] = precio

    # Calcular la cantidad de mercados diferentes
    for ean, producto in productos_agrupados.items():
        producto['cantidad_mercados'] = len(producto['cantidad_mercados'])

    return productos_agrupados
