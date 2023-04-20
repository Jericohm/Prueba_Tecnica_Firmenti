
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

app.use('/', rutas);

// CONEXIÓN MONGODB
mongoose.connect('mongodb+srv://jericohm:12345@cluster1.zhnf0.mongodb.net/database?retryWrites=true&w=majority',{
  useNewUrlParser: true
}).then(()=>{
  console.log("Conectado a MongoDB")
});


//module.exports = app;