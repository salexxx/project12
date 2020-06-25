/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  try {
    fs.readFile(path.resolve('./data/', 'cards.json'), { encoding: 'utf-8' }, (err, data) => {
      res.status(200).send(JSON.parse(data));
    });
  } catch (err) {
    res.status(500).send({ err, "message": "something wrong with the server!" });
  }
});

module.exports = router;
