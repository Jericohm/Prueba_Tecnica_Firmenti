
import express from 'express'
import mongoose from 'mongoose'
import rutas from './routes/rutas'

//configuración de puerto
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('Servicio Activo')
});

                            //Prueba
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((_req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Authorization');
    res.header('X-API-KEY', 'Origin');
    res.header('Accept', 'Access-Control-Allow-Request-Method');
    res.header('X-Requested-With', 'Content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
    res.header('Allow', 'GET');
    res.header('POST', 'DELETE');
    res.header('PATCH');
    next();
});

app.use('/', rutas);

// CONEXIÓN MONGODB
mongoose.connect('mongodb+srv://jericohm:12345@cluster1.zhnf0.mongodb.net/database?retryWrites=true&w=majority',{
  useNewUrlParser: true
}).then(()=>{
  console.log("Conectado a MongoDB")
});


//module.exports = app;