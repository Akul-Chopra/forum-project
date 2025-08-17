const express = require('express');
const passport = require('passport');
const Thread = require('../models/Thread');

const router = express.Router();

// Create a new thread
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const { title, description, tags, category } = req.body;

  const thread = new Thread({
    title,
    description,
    creator: req.user.id,
    tags,
    category,
  });

  await thread.save();
  res.json(thread);
});

// Get all threads
router.get('/', async (req, res) => {
  const threads = await Thread.find().populate('creator', 'username');
  res.json(threads);
});

module.exports = router;
