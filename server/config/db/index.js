const mongoose = require("mongoose");

const DB = process.env.DATABASE_HOST.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
).replace("dbname", process.env.DATABASE_NAME);

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB);
    console.log("DB connect successfully");
  } catch (error) {
    console.error("DB connect failure");
  }
}

module.exports = { connect };
