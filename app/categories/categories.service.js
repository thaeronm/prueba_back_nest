const getItems = async (req, res) => {
  try {
    res.json({ data: 'hola desde categories' });
  } catch (e) {
    console.log(e);
  }
};

const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    res.json(body);
  } catch (e) {
    console.log(e);
  }
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
