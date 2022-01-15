const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
      username: 'beetlejuice',
      email: 'beetlejuicebeetlejuice@beetlejuice.com',
      password: 'password123'
    },
    {
      username: 'pinocchio',
      email: 'pinocchio@realboys.com',
      password: 'password123'
    },
    {
      username: 'toto_mama',
      email: 'dorothy@notkansasanymore.com',
      password: 'password123'
    },
    {
      username: 'just_jack',
      email: 'jskellington@halloweentown.gov',
      password: 'password123'
    },
    {
      username: 'JohnM',
      email: 'john.malkovich@johnmalkovich.com',
      password: 'password123'
    },
    {
      username: 'hodor',
      email: 'hodor@hodor.hodor',
      password: 'password123'
    },
    {
      username: 'Vader',
      email: 'DVader@dstar.gov',
      password: 'password123'
    },
    {
      username: 'Snow',
      email: 'snowwhite@NAACP.org',
      password: 'password123'
    },
    {
      username: 'vangogh',
      email: 'vangogh@tinnitussupport.org',
      password: 'password123'
    },
    {
      username: 'i_know_nothing',
      email: 'jon.snow@nightswatch.gov',
      password: 'password123'
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
  
  module.exports = seedUsers;