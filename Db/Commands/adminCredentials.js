const runTransaction = require("../connect");

const {
  deleteAllAdminsTransaction,
  deleteAdminTransaction,
  createAdminTransaction,
} = require("../transactions");

const deleteAllAdmins = async (username, password) => {
  await runTransaction(deleteAllAdminsTransaction, username, password);
};

const deleteAdmin = async (username, password, adminUsername) => {
  await runTransaction(
    deleteAdminTransaction,
    username,
    password,
    adminUsername
  );
};

const createAdmin = async (
  username,
  password,
  adminUsername,
  adminPassword
) => {
  await runTransaction(
    createAdminTransaction,
    username,
    password,
    adminUsername,
    adminPassword
  );
};

const commands = {
  deleteAllAdmins,
  deleteAdmin,
  createAdmin,
};

const main = () => {
  const args = process.argv.slice(2);
  console.log(args[0], "test");
  switch (args[0]) {
    case "deleteAllAdmins":
      if (args.length === 3) {
        deleteAllAdmins(args[1], args[2]);
      } else {
        console.trace("ERROR: Must enter credentials");
      }
      break;
    case "deleteAdmin":
      if (args.length === 4) {
        deleteAdmin(args[1], args[2], args[3]);
      } else {
        console.trace(
          "ERROR: Must enter credentials followed by admin username to delete"
        );
      }
      break;
    case "createAdmin":
      if (args.length === 5) {
        createAdmin(args[1], args[2], args[3], args[4]);
      } else {
        console.trace(
          "ERROR: Must enter credentials followed by admin username and password to create"
        );
      }
      break;
    default:
      console.trace("ERROR: Invalid Command");
  }
};

main();
