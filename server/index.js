require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const { connectToDB } = require('./db/prisma.js');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectToDB().then(() => {
  app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
});
