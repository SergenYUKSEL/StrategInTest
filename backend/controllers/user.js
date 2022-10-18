const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.register = (req, res, next) => {
  bcrypt.hash(req.body.passwd, 10)
  .then(hash => {
    const user = new User({
      email: req.body.email,
      passwd: hash,
    });
    user.save()
    .then(() => res.status(201).json({ userId: user._id, userEmail : user.email, userPasswd : user.passwd,}))
    .catch(error => res.status(400).json({ error}));
  })
  .catch(error => res.status(500).json({ error}));
};

exports.login = (req, res, next) => {
  User.findOne({ email : req.body.email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User not exist" })

            bcrypt.compare(req.body.passwd, user.passwd, (err, data) => {
                if (err) console.log(err)

                if (data == true) { 
                    return res.status(200).json({ msg: "Login success",
                    userId: user.id,
                    userRole: user.role,
                    token: jwt.sign({ userId: user._id},
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' })
                   });
                } else {
                    return res.status(401).json({ msg: "Invalid credencial" })
                }
            })

        })

};

exports.getAllUserGroup = (req, res, next) => {
  User.find({}, {}, function (err, docs) {
      res.status(200).send(docs);
    })
    }
exports.getOneUserGroup =  (req, res, next) => {
  User.find({_id: req.params.id}, {}, function (err, docs) {

    if (docs == 0) {
      res.status(403).send('Le code que vous avez saisie ne fonctionne pas')
    } else {
      res.status(200).send(docs)
    }
    
  })
};
