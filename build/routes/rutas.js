"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import express from 'express';
//import mongoose from 'mongoose'
//import rutas from './models/datos'
const router = (0, express_1.Router)();
router.get('/', function (_req, res) {
    res.render('menu.html');
});
router.get('/1', (_req, _res) => {
    // lógica para manejar una petición GET a la ruta principal
});
router.post('/', (_req, _res) => {
    // lógica para manejar una petición POST a la ruta principal
});
router.put('/:id', (_req, _res) => {
    //const { id } = req.params;
    // lógica para manejar una petición PUT a la ruta con un parámetro de ID
});
router.delete('/:id', (_req, _res) => {
    //const { id } = req.params;
    // lógica para manejar una petición DELETE a la ruta con un parámetro de ID
});
exports.default = router;
