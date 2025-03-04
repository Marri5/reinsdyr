const express = require('express');
const router = express.Router();
const reindeerController = require('../controllers/reindeerController');
const authMiddleware = require('../utils/authMiddleware');

// Route to add a new reindeer
router.post('/add', authMiddleware.isAuthenticated, reindeerController.addReindeer);

// Route to search for reindeer
router.get('/search', reindeerController.searchReindeer);

// Route to get all reindeer for a specific owner
router.get('/my-reindeer', authMiddleware.isAuthenticated, reindeerController.getMyReindeer);

module.exports = router;