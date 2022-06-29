const router = require('express').Router();
const { Techblog, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all techblogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbTechblogData = await Techblog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const techblogs = dbTechblogData.map((techblog) =>
      techblog.get({ plain: true })
    );

    res.render('homepage', {
      techblogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
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

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
