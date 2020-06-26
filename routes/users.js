/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(path.resolve('./data/', 'users.json'), { enccoding: 'utf-8' }, (err, data) => {
    if (err != null) {
      res.status(500).send({ err, "message": "something wrong with the server!" });
      return;
    }
    res.status(200).send(JSON.parse(data));
  });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  let user = null;
  fs.readFile(path.resolve('./data/', 'users.json'), { enccoding: 'utf-8' }, (err, data) => {
    if (err != null) {
      res.status(500).send({ err, "message": "something wrong with the server!" });
      return;
    }
    const arr = JSON.parse(data);
    if (Array.isArray(arr)) {
      user = arr.find((elem) => elem._id === userId);
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
