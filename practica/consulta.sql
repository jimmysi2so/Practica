SELECT p.Name AS NombreProducto, MIN(pr.discount_price) AS PrecioMinimo, p.Ean, p.SKU, m.Name AS NombreMercado  
FROM Product p JOIN Market m ON(p.MarketID = m.MarketID) JOIN Price pr ON(p. ProductID = pr.ProductID)
WHERE pr.active = 1
GROUP BY p.Name, p.Ean, p.Sku, m.Name;

/*
2)Teniendo en cuenta el modelo de la imagen 1, describa con palabras un proceso que tenga que ser ejecutado cada 
cierto tiempo (automatización) y que obtenga información “relevante” diferente a la pedida en la pregunta 1.

R:Obtener el Precio de un Producto de un Mercado, con esta informacion la empresa puede comparar los precios con los 
demas mercados de la zona de la competencia y poder tomar deciciones. 
*/
