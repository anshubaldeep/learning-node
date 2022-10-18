const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../utils/path');
const adminData = require('./admin');

router.get('/', (req,res)=>{
    console.log(adminData.products);
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
})

module.exports = router;
