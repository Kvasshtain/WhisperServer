const Sequelize = require('sequelize')

const sequelize = new Sequelize('whisperdb', 'kvasshtain', 'Kvaskovu20031986', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false,
  },
})

module.exports = sequelize
