# Prueba_Tecnica_Firmenti
Se desarrolló una API REST haciendo uso de las tecnologías Typescript y NodeJS, las cuales se conectan a un cluster de mongoDB

**EJECUCIÓN DE LA APLICACIÓN**
1) Deberá ubicarse dentro de la carpeta del proyecto desde una terminal.
2) Ejecute el comando npm install (Esto descargará todos los modulos necesarios)
3) Ejecute el comando npm run dev (Esto iniciará la ejecución del servició)

**Pruebas**
Para realizar las pruebas se requiere la descarga de POSTMAN o una plataforma API de su elección.

Estando dentro de dicha aplicación y con el servició en ejecución se puedene realizar las pruebas de los métodos correspondientes haciendo uso de "localhost:3000/":

GET(Todos los datos):     localhost:3000/
GET(Búsqueda individual): localhost:3000/[nombre_de_producto_existente]
POST:                     localhost:3000/
  En adición se deben pasar como body los datos de "nombre" y "categoría" correspondientemente.
PUT:                      localhost:3000/[nombre_de_producto_existente]
  En adición se deben pasar como body los datos de "nombre" y "categoría" correspondientemente.
  
 *NOTA*
 La base de datos solo contiene 2 datos de inicio:
    {
        "_id": "643f73f09c61672b7c7e81b2",
        "nombre": "Gato",
        "categoria": "Felino"        
    },
    {
        "_id": "643f7efb522f1a4d88f78d0c",
        "nombre": "Vocho",
        "categoria": "Coche"
    }
