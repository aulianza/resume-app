const DBService = require("@database/services.js");

class SkillModel {
  constructor() {
    this.table = "skill";
    this.dbService = new DBService();
  }

  async index() {
    const query = `SELECT * 
                   FROM ${this.table}`;
    return await this.dbService.query(query);
  }

  async create(data) {
    const query = `INSERT INTO ${this.table} SET ?`;
    const result = await this.dbService.query(query, data);
    return result;
  }

  async checkSkill(name) {
    const query = `SELECT * 
                   FROM ${this.table} 
                   WHERE name=?`;
    return await this.dbService.query(query, name);
  }

  async getById(id) {
    const query = `SELECT id, name, level, icon 
                   FROM ${this.table} 
                   WHERE id=?`;
    return await this.dbService.query(query, id);
  }

  async update(id, data) {
    const query = `UPDATE ${this.table}
                   SET ? 
                   WHERE id=?`;

    const result = await this.dbService.query(query, [data, id]);
    return result;
  }

  async delete(id) {
    const query = `DELETE FROM ${this.table} WHERE id=?`;
    return await this.dbService.query(query, id);
  }

}

module.exports = SkillModel;
