const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req,res)=>{
    res.render('shop', { prods: adminData.products, docTitle: 'Shop', path: '/' });
})

module.exports = router;
