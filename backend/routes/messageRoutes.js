import express from 'express';
import { getAllContacts, getChats, getMessagesByUserId, sendMessage } from '../controllers/messageController.js';
import { protectRoute } from '../middleware/authMiddleware.js';
import { arcjetProtection } from '../middleware/arcjetMiddleware.js';

const router =express.Router();

router.use(arcjetProtection,protectRoute);


router.get("/contacts", getAllContacts);
router.get("/chats", getChats);
router.get("/:id", getMessagesByUserId);

router.post("/send/:id", sendMessage);

export default router;