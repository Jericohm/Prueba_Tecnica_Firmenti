import { Router, Request, Response, NextFunction } from 'express';
//import express from 'express';
//import mongoose from 'mongoose'
import Producto from '../models/datos' //AQUI

const router = Router();

router.get('/:nombre', function(req: Request, res: Response) {
  Producto.findOne({'nombre':req.params.nombre}, (err, datos)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.status(200).json(datos);
    }
  });
});

router.get('/', function(_req: Request, res: Response) {
  Producto.find({}, (err, datos)=>{
    if(err){
      res.json({'Error':'No Existe'});
    }else{
      res.status(200).json(datos);
    }
  })
});

router.post('/', (req: Request, res: Response, _next: NextFunction) => {
  var nuevoProducto = new Producto({
    nombre: req.body.nombre,
    categoria: req.body.categoria
  });
  nuevoProducto.save((err,data)=>{
    if(err){
      res.json({'error':"Error al insertar"});
    }else{
      res.status(200).json(data);
    }
  });
});

router.put('/:nombre', async(req: Request, res: Response, _next: NextFunction) => {
  const nombreP = req.params.nombre;
  /*const resultado = */await Producto.replaceOne({nombre: nombreP}, req.body);
  res.json({nombreP});

})

router.delete('/:nombre', (req: Request, res: Response, _next: NextFunction) => {
  Producto.deleteOne({'nombre':req.params.nombre}, (err)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.json({'Estatus':'Borrado'});
    }
  });
});

export default router;