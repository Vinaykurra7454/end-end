const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker!............Vinay junior aws developer progressing quickly # very soon i will fcuk you bae🤙');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
