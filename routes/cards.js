/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(path.resolve('./data/', 'cards.json'), { encoding: 'utf-8' }, (err, data) => {
    if (err != null) {
      res.status(500).send({ err, "message": "something wrong with the server!" });
      return;
    }
    try {
      res.status(200).send(JSON.parse(data));
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
});

module.exports = router;
