const Sequelize = require('sequelize')

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
    //port: 5433, // default value is 5432
    define: {
      timestamps: false,
    },
  })
}

module.exports = sequelize
