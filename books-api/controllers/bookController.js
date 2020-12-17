const { Book } = require('../models');

module.exports.getAllBooks = (req, res) => {
  Book.findAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(500).send({
        err: 'Error getting books',
      });
    });
};
