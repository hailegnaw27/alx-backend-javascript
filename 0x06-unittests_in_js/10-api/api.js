const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 7865;

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

// Validation and error handling for login route
app.post(
  '/login',
  body('userName').notEmpty().withMessage('Username cannot be empty.'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.userName;
    res.send(`Welcome ${username}`);
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;

