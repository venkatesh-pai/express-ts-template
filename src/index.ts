import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => res.send('Express + TypeScript Server is Alive!'));

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});