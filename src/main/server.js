const express = require('express');

const app = express();
const PORT = process.env.PORT = 4000;

/** When given file path by user. Parse file path for name of file and folder located.
Add folder directory here and create link for file --> http://localhost:4000/file_name.bam.bai */

app.use(express.static('~/Desktop/amp_lab/pilup.js/test-data'));

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});





