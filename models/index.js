const User = require('./User');
const Techblog = require('./Techblog');
const Comment = require('./Comment');

User.hasMany(Techblog, {
  foreignKey: 'techblog_id',
});

Techblog.belongsTo(User, {
  foreignKey: 'techblog_id',
});

Techblog.hasMany(Comment, {
  foreignKey: 'Comment_id',
});

Comment.belongsTo(Techblog, {
  foreignKey: 'Comment_id',
});

module.exports = { User, Techblog, Comment };
