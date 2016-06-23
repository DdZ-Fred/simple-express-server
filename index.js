import express from 'express';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About us</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
