const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);
