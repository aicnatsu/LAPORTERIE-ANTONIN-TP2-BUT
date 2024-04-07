const registryRepository = require('../repositories/registryRepository');

const addItemToRegistry = async (req, res) => {
  try {
    const { itemName, itemDescription } = req.body;
    const newItem = await registryRepository.addItemToRegistry({ itemName, itemDescription });
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getRegistryItems = async (req, res) => {
  try {
    const { filter } = req.query;

    const registryItems = await registryRepository.getRegistryItems(filter);

    res.status(200).json(registryItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addItemToRegistry,
  getRegistryItems,
};
