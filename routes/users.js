const router = require('express').Router();
const  users  = require('../data/users.json');

router.get('/', (req, res) => {
  res.status(200).send(users);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  var user = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i]._id == id) {
      user = users[i]
      break
    }
  }
  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send({ "message": "Нет пользователя с таким id" })
  }
});



module.exports = router;