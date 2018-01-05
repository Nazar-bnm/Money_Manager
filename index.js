const express = require('express');
const logger = require('morgan');

const config = require('./config');
const { error } = require('./middleware');
const routers = require('./routers');

// static data
const users = require('./data/users');
const navigation = require('./data/navigation');
const categories = require('./data/categories');

const app = express();

app.set('view engine', 'pug');
app.set('views', config.paths.views);
app.set('config', config);

// set global data
app.locals = {
  version: config.version,
  navigation,
  categories
}

// static files (images, css)
app.use(express.static(config.paths.public));
// all request on '/lib' will handle in this middleware
app.use('/lib', express.static(config.paths.lib));

app.use(logger('dev'));

app.use('/', routers.dashboard);
app.use('/categories', routers.categories);
app.use('/statistic', routers.statistic);
app.use('/profile', routers.profile);

app.use(error.notFound);
app.use(app.get('env') === 'development' ? error.development : error.production);

app.listen(config.port, () => console.log('Express running on port:', config.port));
