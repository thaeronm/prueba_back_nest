require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000
app.use(cors());
app.use(express.json());

app.use('/api', require('./app/index'));

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT);
})