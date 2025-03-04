const Reindeer = require('../models/Reindeer');

// Function to add a new reindeer
exports.addReindeer = async (req, res) => {
    try {
        const { name, flock, birthDate, serialNumber } = req.body;
        const newReindeer = new Reindeer({
            name,
            flock,
            birthDate,
            serialNumber,
            owner: req.user.id // Assuming req.user is set after authentication
        });
        await newReindeer.save();
        res.status(201).json({ message: 'Reindeer added successfully', reindeer: newReindeer });
    } catch (error) {
        res.status(500).json({ message: 'Error adding reindeer', error: error.message });
    }
};

// Function to search for reindeer
exports.searchReindeer = async (req, res) => {
    try {
        const query = req.query.q;
        const reindeer = await Reindeer.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { serialNumber: { $regex: query, $options: 'i' } }
            ]
        });
        res.status(200).json(reindeer);
    } catch (error) {
        res.status(500).json({ message: 'Error searching for reindeer', error: error.message });
    }
};