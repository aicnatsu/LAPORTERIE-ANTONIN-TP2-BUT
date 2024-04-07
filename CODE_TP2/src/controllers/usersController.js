const userRepository = require('../repositories/usersRepository');

const createUser = async (req, res) => {
  try {
    const { prenom , nom, username, email, password , age, telephone} = req.body;
    const newUser = await userRepository.createUser({ prenom, nom , username, email, password, age, telephone});
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
  getUsers,
};
