const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [{ type: String }],
  category: { type: String },
  replies: [
    {
      content: { type: String, required: true },
      creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
    },
  ],
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Thread', ThreadSchema);
