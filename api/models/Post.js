import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
