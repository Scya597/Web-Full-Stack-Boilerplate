import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
