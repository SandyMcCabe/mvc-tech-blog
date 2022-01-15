const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('***** ***** *****');
    await seedUsers();
    console.log('***** Users Seeded *****');
  
    await seedPosts();
    console.log('***** Postss Seeded *****');
  
    await seedComments();
    console.log('***** Commentss Seeded *****');
  
    process.exit(0);
  };
  
  seedAll();