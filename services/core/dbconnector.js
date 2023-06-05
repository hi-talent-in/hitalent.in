import pkg from "pg";
const { Client } = pkg;
import { Sequelize } from "sequelize";

const dbHost = process.env.DBHOST;
const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASS;
const dbName = process.env.DBNAME;
const dbPort = process.env.DBPORT;

export const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  dialect: "postgres",
  host: dbHost,
  logging: false,
});

const client = new Client({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPass,
  database: dbName,
  connectionTimeoutMillis: 10000,
  idle_in_transaction_session_timeout: 30000,
});

export const dbConnect = async () => {
  await client.connect();
};

export const sqConnect = async () => {
  await sequelize.authenticate().then(async () => {
    await sequelize
      .sync({ force: false, alter: true })
      .then(() => {
        console.log("DATABASE SYNCED");
      })
      .catch((error) => {
        console.log(`Database sync error=${error.message}`);
      });
  });
};

// module.exports = { sqConnect, dbConnect, sequelize };
