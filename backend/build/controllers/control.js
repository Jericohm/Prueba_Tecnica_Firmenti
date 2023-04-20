/*import {Request, Response} from 'express'
import Article from './routes/rutas'

var controller ={

    save: (req: Request, _res:Response)=>{
        var params = req.body;

        var article = new Article();

        article.nombre = params.nombre;
        article.categoria = params.categoria

        article.save(err, saved)=>{
            return res.status(404).send({
                status: 'error',
                message: 'Error al guardar'
            });
        }
    }
}*/ 
