const Sequelize = require('sequelize')
const sequelize = require('../sequelizeConnection/connection')

class Enrolment extends Sequelize.Model {}
Enrolment.init(
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Enrolment',
  }
)

module.exports = Enrolment
