const sequelize = require('../config/connection');
const seedTechblogs = require('./techblogData');
const seedComment = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  

  process.exit(0);
};

seedAll();
