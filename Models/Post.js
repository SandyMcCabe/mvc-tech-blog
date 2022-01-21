const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    title:
      DataTypes.STRING,

    post_content:
      DataTypes.TEXT

  },

  {
    sequelize

  }
);

module.exports = Post;