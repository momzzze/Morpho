require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');

const fileRoutes = require('./routes/fileRoutes');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
