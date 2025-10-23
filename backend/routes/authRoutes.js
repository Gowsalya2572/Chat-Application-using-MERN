import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/authMiddleware.js';
import { signup,login,logout,updateProfile } from '../controllers/authControllers.js';

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.put('/update-profile',protectRoute, updateProfile);

router.get("/check",protectRoute,(req,res)=>res.status(200).json(req.user));

export default router;