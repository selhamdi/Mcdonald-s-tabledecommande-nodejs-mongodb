const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// middleware
router.use(bodyParser.json());

// models
const Supp = require('../models/sup');

// find all categories
router.get('/', async (req, res, next)=>{
    try {
        const categorie = await Supp.find();
        res.json(categorie);
    } catch (err) {
        res.json({message:err});
    }
});

// FIND DATA CATEGORIE BY ID
router.get('/:id', async (req, res, next)=>{
   
    try {
        const categorie = await Supp.findById(req.params.id);
        res.json(categorie);
    } catch (err) {
        res.json({message:err});
    }
});

// Create new categorie 
router.post('/add', async (req, res, next)=>{
    const categorie = new Supp({
    price: req.body.price,
    nomSupp: req.body.nomSupp
    });
    try {
        const saveCategorie = await categorie.save();
        res.json(saveCategorie);
    } catch (err) {
        res.json({message:err});
    } 
});



module.exports = router;