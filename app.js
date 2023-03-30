const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const notFoundController = require('./controllers/notfound');
const rootdir = require('./utils/path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootdir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(notFoundController.notFoundPage);

app.listen(4000);