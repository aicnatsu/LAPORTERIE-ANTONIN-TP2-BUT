const users = [];

const createUser = async ({prenom, nom , username, email, password, age, telephone}) => {
  const newUser = { id: users.length + 1, prenom, nom , username, email, password, age, telephone};
  users.push(newUser);
  return newUser;
};

const getUsers = async () => {
  return users;
};

module.exports = {
  createUser,
  getUsers,
};
