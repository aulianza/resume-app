const mysql = require("promise-mysql");
const config = require("@database/config.js").database;

class DBConnection {
  constructor() {
    this.connection = null;
    this.createConnection = this.createConnection.bind(this);
    this.closeConnection = this.closeConnection.bind(this);
  }

  async createConnection(db = "default") {
    const configuration = {
      host: config[db].host,
      user: config[db].user,
      password: config[db].password,
      port: config[db].port,
      database: config[db].db
    };
    try {
      const pool = await mysql.createPool(configuration);
      return pool;
    } catch (ex) {
      throw ex;
    }
  }

  async closeConnection(connection) {
    try {
      await connection.end();
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = DBConnection;
