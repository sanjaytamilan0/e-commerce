import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import { sendOtp, verifyOtp } from '../controllers/otpController.js';
import { createProfile} from '../controllers/createProfile.js';
import { getProfile } from '../controllers/getProfile.js';
import { pushnotification } from '../controllers/pushnotification.js';

const router = Router();

// User registration 
router.post('/register', registerUser);

// User login 
router.post('/login', loginUser);

// Send OTP 
router.post('/send-otp', sendOtp);

// Verify OTP 
router.post('/verify-otp', verifyOtp);

// create profile
router.post('/createProfile',createProfile)

router.post('/getProfile',getProfile)

router.post('/pushNotification',pushnotification)



export default router;
