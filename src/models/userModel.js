import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    require: [true, "Please provide email"],
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid"],
  },
  password: {
    type: String,
    require: [true, "Please provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// mongodb model name will be pluralized automatically and lowercase
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
