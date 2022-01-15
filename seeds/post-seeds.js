const { Post } = require('../models');

const postdata = [
    {
      title: 'B.White - Kindness',
      post_text: 'Kindness and consideration of somebody besides yourself keeps you feeling young.',
      user_id: 10
    },
    {
      title: 'B.White - Regrets',
      post_text: 'I have no regrets at all. None. I consider myself to be the luckiest old broad on two feet.',
      user_id: 8
    },
    {
      title: 'B.White - Passion',
      post_text: 'Everybody needs a passion. Thats what keeps life interesting. If you live without passion, you can go through life without leaving any footprints',
      user_id: 1
    },
    {
      title: 'B.White - Legend',
      post_text: 'About being called a legend: I just laugh. Have I got them fooled.',
      user_id: 4
    },
    {
      title: 'B.White - Goals',
      post_text: 'My answer to anything under the sun, like:  What have you not done in the business that youve always wanted to do? is Robert Redford',
      user_id: 7
    },
  ];
  
  const seedPosts = () => Post.bulkCreate(postdata);
  
  module.exports = seedPosts;