require("module-alias/register");
const DBConnection = require("@database/connection.js");

class DBCommonService {
  constructor(db = "default") {
    this.db = db;
    this.dbConnection = new DBConnection();
  }

  async query(query, data = []) {
    // console.log(query)
    try {
      const connection = await this.dbConnection.createConnection(this.db);
      try {
        const result = await connection.query(query, data);
        await this.dbConnection.closeConnection(connection);
        return result;
      } catch (ex) {
        await this.dbConnection.closeConnection(connection);
        return { errorCode: ex.code };
      }
    } catch (ex) {
      // console.log(ex);
      return { errorCode: ex.code };
    }
  }
}

module.exports = DBCommonService;
