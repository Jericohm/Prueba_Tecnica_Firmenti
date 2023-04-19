//import { Schema, model, connect } from 'mongoose';
import mongoose, {Schema} from 'mongoose';

// Crear Interfaz
interface Producto {
  nombre: string;
  categoria: String;
}
//Crear Schema
const productoSchema = new Schema<Producto>({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true }
});

// 3. Crear Modelo
//const producto = model<Producto>('producto', productoSchema);

//module.exports = mongoose.model('usuarios',productoSchema);
//module.exports = mongoose.model('producto',productoSchema);

export default mongoose.model('Producto', productoSchema);
/*export interface producto extends mongoose.productoSchema {
    nombre: string,
    categoría: string;

}*/