const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker!............Vinay junior aws devloper very soon to fcuk🤙');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
