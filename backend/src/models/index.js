'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { databaseConfig } from '../config';
const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(databaseConfig);

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
