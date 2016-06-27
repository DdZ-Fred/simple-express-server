import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', (req, res) => {
  const people = [
    {
      fname: 'John',
      lname: 'Doe',
      age: 23,
      gender: 'male',
    },
    {
      fname: 'Tom',
      lname: 'Jackson',
      age: 27,
      gender: 'male',
    },
    {
      fname: 'Tracy',
      lname: 'Smith',
      age: 30,
      gender: 'female',
    },
  ];
  res.json(people);
});


app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', (req, res) => {
  res.redirect('/about.html');
});


app.post('/subscribe', ({ body }, res) => {
  const { email, name } = body;
  console.log('Request made....');
  console.log(`${name} has subscribed with ${email}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
