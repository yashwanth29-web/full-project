// routes/mainRoutes.js
import express from 'express';
import { getAllStudents } from '../controllers/studentController.js';
import { register, login } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/students', verifyToken, getAllStudents);
router.post('/register', register);
router.post('/login', login);

// Protected route
router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: '🔒 Protected route accessed', user: req.user });
});

export default router;
