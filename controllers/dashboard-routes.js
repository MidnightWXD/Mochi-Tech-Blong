const router = require('express').Router();
const { Techblog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth , async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Techblog, attributes: ['id', 'title', 'content'] }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        loggedIn: true,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }); 

router.get('/new', withAuth , async (req, res) => {
try {
    res.render('newtechblog', {
    loggedIn: true
    });
} catch (err) {
    res.status(500).json(err);
}
}); 

module.exports = router;