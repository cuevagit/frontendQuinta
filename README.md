# Proyecto Carrito de Compras Armer�a "La Liebre"

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades

En este proyecto podr� encontrar las siguientes funcionalidades:

### `Selecci�n de productos`

Podr� seleccionar entre los productos disponibles en la Armer�a "La Liebre": Armas y Municiones; pudiendo ver todos los Productos juntos, ver solo las Ofertas, ver solo las Municiones, ver solo las Armas.
En todo momento se hace control del disponible del producto, que es la cantidad que hay disponible teniendo en cuenta si ya hay alguno en el carrito, agregado por parte del usuario. 
Mostrando en todo momento en el CartWidget (carrito) la cantidad agregada en el carrito. `

### `Carrito de Compras`

Luego de seleccionar el/los productos podr� agregarlos al carrito de compras y seguir seleccionando productos si as� lo deseara o finalizar la compra.
Tambi�n se permite eliminar todos los productos o alg�n producto en particular.

### `Orden de Compra`

Luego Al finalizar la compra se le pide mendiante un formulario los datos del comrpador, para luego grabar esos datos, en este mismo lugar se muestra una tabla con el resumen de la compre (producto, precio, cantidades, totales)
mas los datos de la/s compra/s realizada/s, m�s la fecha que se realiz� la transacci�n, y dem�s datos importantes de la compra en la Base de Datos. 
Luego se le muestra al usuario el comprobante de compra con un  n�mero de comprobante.  
Reci�n en esta instancia se actualiza el stock de el/los producto/s comprados en la BD. Y se vacia el carrito.

### `Aplicaci�n WEB`

Para poder acceder a la aplicaci�n deber� ingresar en el siguiente Link: [Armer�a "La Liebre"](https://armerialaliebre.netlify.app/)
