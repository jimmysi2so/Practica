SELECT p.Name AS NombreProducto, MIN(pr.discount_price) AS PrecioMinimo, p.Ean, p.SKU, m.Name AS NombreMercado  
FROM Product p JOIN Market m ON(p.MarketID = m.MarketID) JOIN Price pr ON(p. ProductID = pr.ProductID)
WHERE pr.active = 1
GROUP BY p.Name, p.Ean, p.Sku, m.Name;