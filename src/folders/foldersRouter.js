'use strict';
const express = require('express');

const folderService = require('./foldersService');
const foldersRouter = express.Router();
const bodyParser = express.json();

foldersRouter
  .route('/')
  .get((req, res, next) => {
    folderService.getAllFolders(req.app.get('db'))
      .then((folders) => {
        res.json(folders);
      });
  });
 


module.exports = foldersRouter;