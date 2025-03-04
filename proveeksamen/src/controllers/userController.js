const User = require('../models/User');

// Function to register a new user
exports.registerUser = async (req, res) => {
    const { name, email, password, contactLanguage, phoneNumber } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password, // Password should be hashed before saving
            contactLanguage,
            phoneNumber
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Function to get user information
exports.getUserInfo = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user information', error });
    }
};

// Function to update user information
exports.updateUserInfo = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication
    const updates = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user information', error });
    }
};