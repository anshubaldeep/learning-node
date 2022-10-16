const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../utils/path');

router.get('/', (req,res)=>{
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
})

module.exports = router;
