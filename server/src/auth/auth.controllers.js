const db = require('../db/conection');

const usersCollection = db.get('users');

const addUserToDB = async (req, res, next) => {
  try {
    await usersCollection.insert({
      user: req.body.user,
      password: req.body.password,
    });
    res.status(200).json({ message: 'User has been added to DB' });
  } catch (err) {
    res.status(504);
    next(err);
  }

  // const ussss = await usersCollection.findOne({ user: req.body.user });

  // res.json(ussss);
};

module.exports = {
  addUserToDB,
};
