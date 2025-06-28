// const express = require('express');
// const connectToMongo = require('./db');
// connectToMongo();
// const app = express();
// const port = 3000;

// app.use(express.json());

// // Connect to MongoDB
// // connectToMongo(); 
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require('express');
const connectToMongo = require('./db');

connectToMongo(); // ✅ Only once
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

