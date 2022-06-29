const router = require('express').Router();
const { Techblog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newtechblog = await Techblog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newtechblog);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;