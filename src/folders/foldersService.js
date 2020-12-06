'use strict';

const folderService = {
  getAllFolders (knex) {
    return knex.select('*').from('folders');
  }
};
module.exports = folderService;