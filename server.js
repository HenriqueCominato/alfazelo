const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({message:'Server is up'});
});

app.post('/test',(req,res) => {
  const {name, date} = req.body;
  return res.json({name, date});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
