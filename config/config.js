require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;


module.exports={
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "mini_project_development",
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "mini_project_test",
    "host": DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "mini_project_production",
    "host": DB_HOST,
    "dialect": "mysql"
  }
}
