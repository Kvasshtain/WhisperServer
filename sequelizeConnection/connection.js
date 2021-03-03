const Sequelize = require('sequelize')
const config = require('../config')

<<<<<<< HEAD
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
=======
let sequelize

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: 5432,
    host: '<heroku host>',
    logging: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  })
} else {
  sequelize = new Sequelize('whisperdb', 'kvasshtain', 'Kvaskovu20031986', {
    dialect: 'postgres',
    host: 'localhost',
    define: {
      timestamps: false,
    },
  })
}
>>>>>>> 0516bfcc068d10861df5d47659b2417c8291b30b

module.exports = sequelize
