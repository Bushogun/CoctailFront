select * FROM
    consolidadovtasmensualxproductosdetalle
WHERE
    ide_tipoproducto = 1
GROUP BY
    ide_tipoproducto, ide_producto, des_producto;


--2

SELECT
    ide_zona,
    nom_zona,
    COUNT(*) AS CantidadProductosTipo1
FROM
    consolidadovtasmensualxproductosdetalle
WHERE
    ide_tipoproducto = 1
GROUP BY
    ide_zona, nom_zona;


--3

SELECT
    YEAR(FROM_UNIXTIME(fecha)) AS Anio,
    SUM(enero + febrero + marzo + abril + mayo + junio + julio + agosto + septiembre + octubre + noviembre + diciembre) AS TotalVentas
FROM
    consolidadovtasmensualxproductosdetalle
GROUP BY
    Anio;


--4

SELECT
    YEAR(FROM_UNIXTIME(fecha)) AS Anio,
    ide_zona,
    nom_zona,
    AVG(enero + febrero + marzo + abril + mayo + junio + julio + agosto + septiembre + octubre + noviembre + diciembre) AS PromedioVentas
FROM
    consolidadovtasmensualxproductosdetalle
WHERE
    nom_zona <> 'Administrativos'
GROUP BY
    Anio, ide_zona, nom_zona;


--5

UPDATE
    consolidadovtasmensualxproductosdetalle
SET
    diciembre = 0
WHERE
    nom_ciudad = 'Guapi'
    AND des_producto = 'Triki Suerte';
