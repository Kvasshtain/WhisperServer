const Sequelize = require('sequelize')
const config = require('../config')

// const sequelize = new Sequelize('whisperdb', 'kvasshtain', 'Kvaskovu20031986', {
//   dialect: 'postgres',
//   host: 'localhost',
//   port: 5433,
//   define: {
//     timestamps: false,
//   },
// })

sequelize = new Sequelize( config.production.use_env_variable, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: true
  },
  define: {
    timestamps: false,
  },
});

module.exports = sequelize
