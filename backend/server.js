const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
