const drinks = require("../Models/drinks");
const bakedGoods = require("../Models/baked-goods");
const { adminCredentials } = require("../config");
const hashPassword = require("./password");

//Init transactions
const initDrinksTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.createCollection(drinks.key);
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};
const dropDrinksTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.collection("drinks").drop();
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const initBakedGoodsTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.createCollection(bakedGoods.key);
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};
const dropBakedGoodsTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.collection("bakedGoods").drop();
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const initAdminCredentialsTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.createCollection("adminCredentials");
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};
const dropAdminCredentialsTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.collection("adminCredentials").drop();
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const initTokensTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.createCollection("tokens");
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const dropTokensTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.collection("tokens").drop();
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const deleteAllAdminsTransaction = async (db, username, password) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db.collection("adminCredentials").deleteMany({});
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const deleteAdminTransaction = async (
  db,
  username,
  password,
  adminUsername
) => {
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    try {
      await db
        .collection("adminCredentials")
        .deleteMany({ username: { $eq: adminUsername } });
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

const createAdminTransaction = async (
  db,
  username,
  password,
  adminUsername,
  adminPassword
) => {
  console.log("USERNAME", adminCredentials.username, username);
  console.log("PASSWORCD", adminCredentials.password, password);
  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    const document = {
      username: adminUsername,
      password: hashPassword(adminPassword),
      dateAdded: new Date().toString(),
    };
    try {
      await db.collection("adminCredentials").insertOne(document);
    } catch (err) {
      console.trace(err);
    }
  } else {
    console.trace("ERROR: Incorrect Credentials");
  }
};

module.exports = {
  initDrinksTransaction,
  dropDrinksTransaction,
  initBakedGoodsTransaction,
  dropBakedGoodsTransaction,
  initAdminCredentialsTransaction,
  dropAdminCredentialsTransaction,
  initTokensTransaction,
  dropTokensTransaction,
  deleteAllAdminsTransaction,
  deleteAdminTransaction,
  createAdminTransaction,
};
