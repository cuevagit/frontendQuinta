# Proyecto Carrito de Compras Armería "La Liebre"

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Funcionalidades

En este proyecto podrá encontrar las siguientes funcionalidades:

### `Selección de productos`

Podrá seleccionar entre los productos disponibles en la Armería "La Liebre": Armas y Municiones; pudiendo ver todos los Productos juntos, ver solo las Ofertas, ver solo las Municiones, ver solo las Armas.
En todo momento se hace control del disponible del producto, que es la cantidad que hay disponible teniendo en cuenta si ya hay alguno en el carrito, agregado por parte del usuario. 
Mostrando en todo momento en el CartWidget (carrito) la cantidad agregada en el carrito. `

### `Carrito de Compras`

Luego de seleccionar el/los productos podrá agregarlos al carrito de compras y seguir seleccionando productos si así lo deseara o finalizar la compra.
También se permite eliminar todos los productos o algún producto en particular.

### `Orden de Compra`

Luego Al finalizar la compra se le pide mendiante un formulario los datos del comrpador, para luego grabar esos datos, en este mismo lugar se muestra una tabla con el resumen de la compre (producto, precio, cantidades, totales)
mas los datos de la/s compra/s realizada/s, más la fecha que se realizó la transacción, y demás datos importantes de la compra en la Base de Datos. 
Luego se le muestra al usuario el comprobante de compra con un  número de comprobante.  
Recién en esta instancia se actualiza el stock de el/los producto/s comprados en la BD. Y se vacia el carrito.

### `Aplicación WEB`

Para poder acceder a la aplicación deberá ingresar en el siguiente Link: [Armería "La Liebre"](https://armerialaliebre.netlify.app/)
