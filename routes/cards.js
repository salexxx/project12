const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(path.resolve('./data/', 'cards.json'), {encoding: 'utf-8'}, (err, data)=>{
    if (err) {
      console.log(err);
      return;
  }

    res.status(200).send(JSON.parse(data));

  })


});

module.exports = router;