const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');
const rootdir = require('./utils/path');

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootdir, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, 'views', '404.html'));
});

app.listen(4000);