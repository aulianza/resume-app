const SkillModel = require("@skill/models");
const Validate = require("fastest-validator");
const HttpStatus = require("http-status-codes");

class SkillService {
  constructor() {
    this.skillModel = new SkillModel();
    this.validator = new Validate();
    this.schema = {
      name: {
        type: "string",
        min: "3"
      },
      level: {
        type: "string"
      },
      icon: {
        type: "string",
        optional: true
      }
    };
  }

  async index() {
    return await this.skillModel.index();
  }

  async create(data) {
    const skill = {
      name: data.name,
      level: data.level,
      icon: data.icon
    };

    const isFormValid = await this.validator.validate(skill, this.schema);

    if (isFormValid === true) {
      const isDataValid = await this.dataValidation(skill);
      if (isDataValid !== true) {
        return {
          status: HttpStatus.BAD_REQUEST,
          error: {
            error_code: "DATA_VALIDATION",
            message: isDataValid
          }
        };
      } else {
        const skillSaved = await this.skillModel.create(skill);
        if (skillSaved.affectedRows === 0) {
          return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: {
              error_code: "INTERNAL_SERVER_ERROR",
              message: "Internal Server Error"
            }
          };
        }
        return {
          status: HttpStatus.OK,
          message: "Skill Added Successfully"
        };
      }
    } else {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: {
          error_code: "FORM_VALIDATION",
          message: isFormValid
        }
      };
    }
  }

  async dataValidation(data) {
    const { name } = data;
    const checkSkillExist = await this.skillModel.checkSkill(name);

    if (checkSkillExist.length > 0) {
      return [
        {
          type: "string",
          field: "name",
          message: "skill already exist"
        }
      ];
    }

    return true;
  }

  async getById(id) {
    const data = await this.skillModel.getById(id);

    if (data.length > 0) {
      return {
        status: HttpStatus.OK,
        data: data[0]
      };
    }

    return {
      status: HttpStatus.NO_CONTENT,
      message: "DATA NOT FOUND"
    };
  }

  async update(id, data) {
    if (!data) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'id is required!'
      };
    }

    const updatedData = await this.skillModel.update(id, data);

    if (updatedData.affectedRows !== 1) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error'
      };
    }

    return {
      status: HttpStatus.OK,
      data: 'Data Updated'
    };
  }

  async delete(id) {
    if (!id) {
      return {
        status: 400,
        message: 'id is required!'
      };
    }
    const deletedData = await this.skillModel.delete(id);
    if (deletedData.affectedRows !== 1) {
      return {
        status: 500,
        message: 'Internal Server Error'
      };
    }
    return {
      status: 200,
      data: 'Data Deleted'
    };
  }

}

module.exports = SkillService;
