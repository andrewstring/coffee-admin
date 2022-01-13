const runTransaction = require("../connect");

const {
  initDrinksTransaction,
  dropDrinksTransaction,
  initBakedGoodsTransaction,
  dropBakedGoodsTransaction,
  initAdminCredentialsTransaction,
  dropAdminCredentialsTransaction,
  initTokensTransaction,
  dropTokensTransaction,
} = require("../transactions");

const initDrinks = async (username, password) => {
  await runTransaction(initDrinksTransaction, username, password);
};
const dropDrinks = async (username, password) => {
  await runTransaction(dropDrinksTransaction, username, password);
};
const initBakedGoods = async (username, password) => {
  await runTransaction(initBakedGoodsTransaction, username, password);
};
const dropBakedGoods = async (username, password) => {
  await runTransaction(dropBakedGoodsTransaction, username, password);
};
const initAdminCredentials = async (username, password) => {
  await runTransaction(initAdminCredentialsTransaction, username, password);
};
const dropAdminCredentials = async (username, password) => {
  await runTransaction(dropAdminCredentialsTransaction, username, password);
};
const initTokens = async (username, password) => {
  await runTransaction(initTokensTransaction, username, password);
};
const dropTokens = async (username, password) => {
  await runTransaction(dropTokensTransaction, username, password);
};

const commands = {
  initDrinks,
  dropDrinks,
  initBakedGoods,
  dropBakedGoods,
  initAdminCredentials,
  dropAdminCredentials,
  initTokens,
  dropTokens,
};

const main = () => {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.trace("ERROR: must provide an initialization argument");
  } else if (args.length !== 3) {
    console.trace("ERROR: Must Provide Credentials");
  } else {
    commands[args[0]](args[1], args[2]);
  }
};

main();
