# API REST para un GESTOR DE PARTIDAS de ping-pong
## Lenguaje de implementación
### JavaScript ES6
Basado en NodeJS, se ha instalado el software **npm** desde el cual he instalado las diferentes dependencias para levantar el servidor y conectar con la base de datos; siendo *expres* el que se usa para levantar un servidor y *mongoose* para enlazar nuestraA API con la base de datos en Mongo DB y poder realizar más adelante las peticiones fetc necesarias.

## Funcionalidades de la API
### Se han creado una serie de _endpoints_ o _rutas_ que contienen una serie de controladores donde se realizaran los métodos post, get, put, delete... en función de la página front-end y las peticiones fetch que se hagan.

>¿Qué cosas permite hacer?
- leerUsuarios --> Endpoint donde se visualiza un array de objetos con los usuarios que hay en la base de datos mongo
- borrarUsuario --> Endpoint que permite eliminar de la base de datos un usuario concreto de la base de datos mediante su id (pasándolo por params)
- verPartidas --> Endpoint que permite visualizar las partidas que se han ido creando y almacenando en la base de datos
- crearPartida --> Endpoint que en base a rellenar un formulario te permite generar una nueva configuración de partida.
- registro --> Endpoint que permite registrar un usuario
- login --> Endpoint que compara el usuario enviado por formulario con lo usuarios registrados (autentificación)
- eliminarPartida --> Endpoint que permite eliminar una partida mediante un id (pasado por params) 

...
...
...

## Autentificación y roles
### bcrypt | jswebtoken 
- Para la encriptación de contraseñas usamos _bcrypt_
- Para la autentificación, se debe generar un token con la librería jsonwebtoken que es el que nos servirá para los roles, cada token pertenece a un usuario que se logea y va asociado a un rol para poder comparar usuarios y poder por ejemplo tener un rol de administrados y los permisos correspondientes.

## Testing de la API
>POSTMAN
Para testear los diferentes endpoints se ha usado el programa **POSTMAN** que permite enviar una direccion o ruta y seleccionar el método que deseamos (POST, PUT, DELETE, GET) además del envío de tokens y objetos mediante el body (raw)
