const sequelize = require('../config/connection');
const { User, Techblog, Comment } = require('../models');

const commentData = require('./commentData.json');
const userData = require('./userData.json');
const techblogData = require('./techblogData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for ( const techblog of techblogData ) {
    await Techblog.create({
      ...techblog,
      techblog_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedAll();
