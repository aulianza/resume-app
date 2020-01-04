require('dotenv').config();

const mysql = {
  database: {
    default: {
      host: process.env.DB_HOST, 
      user: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      port: process.env.DB_PORT, 
      db: process.env.DB_DB, 
    },
    log: {
      host: process.env.DB_LOG_HOST, 
      user: process.env.DB_LOG_USER, 
      password: process.env.DB_LOG_PASSWORD, 
      port: process.env.DB_LOG_PORT,
      db: process.env.DB_LOG_DB,
    },

  },
};

module.exports = mysql