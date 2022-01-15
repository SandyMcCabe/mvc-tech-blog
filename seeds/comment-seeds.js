269 lines (266 sloc)  7.1 KB
   
const { Comment } = require('../models');

const commentdata = [
    {
      comment_text: 'Ha Ha',
      user_id: 6,
      post_id: 1
    },
    {
      comment_text: 'Thats Awesome',
      user_id: 6,
      post_id: 8
    },
    {
      comment_text: 'Lol',
      user_id: 3,
      post_id: 10
    },
    {
      comment_text: 'So Wonderful',
      user_id: 3,
      post_id: 18
    },
    {
      comment_text: 'Awesome',
      user_id: 7,
      post_id: 5
    },
    {
      comment_text: 'She was great',
      user_id: 1,
      post_id: 20
    },
    {
      comment_text: 'Excellent',
      user_id: 6,
      post_id: 7
    },
    {
      comment_text: 'White was RIGHT',
      user_id: 7,
      post_id: 4
    }    
  ];
  
  const seedComments = () => Comment.bulkCreate(commentdata);
  
  module.exports = seedComments;