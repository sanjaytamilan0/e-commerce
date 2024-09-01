import nodemailer from 'nodemailer';
import crypto from 'crypto';
import User from '../model/userModel.js';

// Setup Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'flutter5050test@gmail.com',
    pass:'vjze osqi iuqi upmy',
  },
});

// @desc    Generate and send OTP to the user's email
// @route   POST /api/users/send-otp
// @access  Public
export const sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Generate a random OTP
    const otp = crypto.randomInt(10000, 99999);

    // Save the OTP and expiration time in the user document
    user.otp = otp;
    user.otpExpires = Date.now() + 15 * 60 * 1000; // OTP expires in 15 minutes
    await user.save();

    // Send OTP via email
    await transporter.sendMail({
      to: email,
      from: 'flutter5050@gmail.com',
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It will expire in 15 minutes.`,
    });

    res.status(200).json({ message: 'OTP sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify OTP
// @route   POST /api/users/verify-otp
// @access  Public
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.otp !== parseInt(otp) || user.otpExpires < Date.now()) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Clear OTP and expiration time
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'OTP verified' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
