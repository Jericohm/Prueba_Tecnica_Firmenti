"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const rutas_1 = __importDefault(require("./routes/rutas"));
//configuración de puerto
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log('Servicio Activo');
});
//Prueba
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization');
    res.header('X-API-KEY', 'Origin');
    res.header('Accept', 'Access-Control-Allow-Request-Method');
    res.header('X-Requested-With', 'Content-type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH');
    res.header('Allow', 'GET');
    res.header('POST', 'DELETE');
    res.header('PATCH');
    next();
});
app.use('/', rutas_1.default);
// CONEXIÓN MONGODB
mongoose_1.default.connect('mongodb+srv://jericohm:12345@cluster1.zhnf0.mongodb.net/database?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado a MongoDB");
});
//module.exports = app;
