/* eslint-disable quotes */
const { addNoteHandler } = require("./handler");

/* eslint-disable quotes */
const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
];

module.exports = routes;
