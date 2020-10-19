// import packages
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// express start
const server = express();

server
  // using req body
  .use(express.urlencoded({ extended: true }))
  // using static files
  .use(express.static("public"))
  // config template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  // routes creation
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// server start
server.listen(5500);
