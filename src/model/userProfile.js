import { Schema, model } from 'mongoose';

const userProfileSchema = Schema(
  {
    name: { type: String, required: true }, // Make name required
    email: { type: String, required: true, unique: true }, // Make email required and unique
    password: { type: String, required: true }, // Make password required
    dob: { type: Date },
    age: { type: Number },
    job: { type: String },
    study: { type: String },
    image: { type: String },
    userid: { type: String, unique: true }, // Make userid unique (if intended)
  },
  {
    timestamps: true,
  }
);

const UserProfile = model('UserProfile', userProfileSchema);

export default UserProfile;