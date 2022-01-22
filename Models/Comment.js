const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      // primaryKey: true,
      allowNull: false
      // autoIncrement: true
    }
  },

  {
    sequelize

  }
);

module.exports = Comment;