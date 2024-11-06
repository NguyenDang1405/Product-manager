const mongoose = require('mongoose');
require('dotenv').config();

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.mongodbURL);
        console.log('Connected successfully!!');
    } catch (error) {
        console.error("Failed to connect to database", error);
    }
}