const knex = require('knex')(require('../knexfile'));


const findByEmail = (req, res) => {
    knex("user")
      .where({ email: req.body.email })
      .then((usersFound) => {
  
        if (usersFound.length === 0) {
          return res
            .status(404)
            .json({ message: `User with ID: ${req.body.email} not found` });
        }
  
        const userData = usersFound[0];
  
        res.status(200).json(userData);
      })
      .catch(() => {
        res.status(500).json({
          message: `Unable to retrieve user data for user with ID: ${req.body.email}`,
        });
      });
  }

module.exports = {
    findByEmail
}