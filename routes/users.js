const router = require('express').Router();
const path = require('path');
const  users  = require(path.resolve('./data/', 'users.json'));

router.get('/', (req, res) => {
  res.status(200).send(users);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let user = null;
  if (Array.isArray(users)){
  user = users.find((elem)=>{
   return  elem._id === id;
    })
  };

  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send({ "message": "Нет пользователя с таким id" })
  }
});



module.exports = router;