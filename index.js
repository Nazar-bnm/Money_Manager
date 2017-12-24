const express = require('express');

const config = require('./config');
const routers = require('./routers');

const app = express();

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello pug' });
})
// app.use(express.static(config.paths.public));

app.use('/accounts', routers.accounts);
app.use('/categories', routers.categories);
app.use('/statistic', routers.statistic);
app.use('/profile', routers.profile);

app.listen(config.port, () => console.log('Express running on port:', config.port));