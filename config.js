module.exports = {
  production: {
        use_env_variable: "DATABASE_URL",
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
          ssl: true,
        },
    }
  }