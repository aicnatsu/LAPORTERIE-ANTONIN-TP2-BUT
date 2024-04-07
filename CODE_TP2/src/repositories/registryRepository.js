const registry = [];

const addItemToRegistry = async ({ itemName, itemDescription }) => {
  const newItem = { id: registry.length + 1, itemName, itemDescription };
  registry.push(newItem);
  return newItem;
};

const getRegistryItems = async (filter) => {
  if (!filter) {
    return registry;
  }

  const filteredItems = registry.filter((item) => item.name.includes(filter));

  return filteredItems;
};

module.exports = {
  addItemToRegistry,
  getRegistryItems,
};
