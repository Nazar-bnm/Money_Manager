const express = require('express');
const logger = require('morgan');

const config = require('./config');
const { error } = require('./middleware');
const routers = require('./routers');

// static data
const users = require('./data/users');
const navigation = require('./data/navigation');

const app = express();

app.set('view engine', 'pug');
app.set('views', config.paths.views);
app.set('config', config);

// set global data
app.locals.version = config.version;
app.locals.navigation = navigation;

// app.get('/', (req, res) => {
//   res.render('index', { title: 'Hello pug' });
// })
// static files (images, css)
app.use(express.static(config.paths.public));
// all request on '/lib' will handle in this middleware
app.use('/lib', express.static(config.paths.lib));

app.use(logger('dev'));

app.use('/', routers.dashboard);
app.use('/accounts', routers.accounts);
app.use('/categories', routers.categories);
app.use('/statistic', routers.statistic);
app.use('/profile', routers.profile);

app.use(error.notFound);
app.use(app.get('env') === 'development' ? error.development : error.production);

app.listen(config.port, () => console.log('Express running on port:', config.port));
