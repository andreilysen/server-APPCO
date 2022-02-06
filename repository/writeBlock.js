const Block = require("../model/block");

const addBlock = async (body) => {
  //   console.log(body);
  const result = await Block.create(body);
  return result;
};

module.exports = {
  //   listContacts,
  //   getContactById,
  //   removeContact,
  addBlock,
  //   updateContact,
};
