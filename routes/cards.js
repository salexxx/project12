const router = require('express').Router();
const path = require('path');
const cards  = require(path.resolve('./data/', 'cards.json'));

router.get('/', (req, res) => {
   res.status(200).json(cards);
});

module.exports = router;