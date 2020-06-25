/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(path.resolve('./data/', 'users.json'), { enccoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params.id;
  let user = null;
  fs.readFile(path.resolve('./data/', 'users.json'), { enccoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    if (Array.isArray(JSON.parse(data))) {
      const arr = JSON.parse(data);
      user = arr.find((item) => item._id === id);
      if (user) {
        res.status(200).send(user);
      } else {
        // eslint-disable-next-line quote-props
        res.status(404).send({ 'message': 'Нет пользователя с таким id' });
      }
    }
  });
});
module.exports = router;
