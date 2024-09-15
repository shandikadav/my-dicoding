/* eslint-disable quotes */
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
} = require("./handler");

/* eslint-disable quotes */
const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
];

module.exports = routes;
