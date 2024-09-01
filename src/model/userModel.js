// src/models/userModel.js

import { Schema, model } from 'mongoose';

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: {
      type: Number,
      default: undefined,
    },
    otpExpires: {
      type: Date,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

export default User;
