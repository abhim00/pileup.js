/** @flow */

import express from 'express';
//const express = require('express');

class Server{
  constructor(){
    const app = express();
    //const PORT = process.env.PORT = 4000;

    /** When given file path by user. Parse file path for name of file and folder located.
    Add folder directory here and create link for file --> http://localhost:3000/file_name.bam.bai */

    app.use(express.static('~/Desktop/amp_lab/pilup.js/test-data'));
    app.listen(3000)
    // app.listen(PORT, () => {
    //   console.log('Server is running at:',PORT);
    // });

  }
}
module.exports = Server;

