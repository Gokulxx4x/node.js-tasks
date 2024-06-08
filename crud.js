// crud.js
const User = require('./models/user');

// Create a new user
const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        console.log('User created:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

// Find all users
const getUsers = async () => {
    try {
        const users = await User.find();
        console.log('Users:', users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

// Update a user by ID
const updateUser = async (userId, newData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, newData, { new: true });
        console.log('User updated:', user);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// Delete a user by ID
const deleteUser = async (userId) => {
    try {
        await User.findByIdAndDelete(userId);
        console.log('User deleted');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};

// Export CRUD operations
module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};
