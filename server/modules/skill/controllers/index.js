const SkillService = require("@skill/services");

class SkillController {
  constructor() {
    this.skillService = new SkillService();
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async index(req, res) {
    res.send({
      data: await this.skillService.index()
    });
  }

  async create(req, res) {
    const addSkill = await this.skillService.create(req.body);
    res.status(addSkill.status);

    if (addSkill.status === 200) {
      res.send({
        data: addSkill
      });
    }

    res.send({
      error: addSkill.error
    });
  }

  async getById(req, res) {
    res.send({
      data: await this.skillService.getById(req.params.id)
    });
  }

  async update(req, res) {
    const id = req.params.id;
    const data = req.body;

    const updateData = await this.skillService.update(id, data);

    res.status(updateData.status);
    if (updateData.status === 200) {
      res.send({
        data: updateData.data
      });
    }

    res.send({
      message: updateData.message
    });
  }

  async delete(req, res) {
    const id = req.params.id;
    const deleteData = await this.skillService.delete(id);

    res.status(deleteData.status);
    if (deleteData.status === 200) {
      res.send({
        data: deleteData.data
      });
    }

    res.send({
      message: deleteData.message
    });
  }

}

module.exports = SkillController;
