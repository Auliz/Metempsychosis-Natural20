const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connecting DB
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

// basic response
app.get('/', (req, res) => res.json({ msg: 'Metempsychosis-Natural20 D&D' }));

// routes
app.use('/apiV1/users', require('./routes/apiV1/users'));
app.use('/apiV1/auth', require('./routes/apiV1/auth'));

// setting port
const PORT = process.env.PORT || 5000;

// starting server on port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
