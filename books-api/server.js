const express = require('express');
const { sequelize } = require('./models');
const app = express();

const PORT = process.env.PORT || 8000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// testing connection
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'we got something' });
});

const booksRoute = require('./routes/bookRoutes');

app.use('/', booksRoute);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
