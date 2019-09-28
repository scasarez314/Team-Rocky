// Dependencies
var db = require("../models");
var path = require("path");

module.exports = function (app) {

  // Load home page on inital / search
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"))
  });

  // Load home page for the navigation bar
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"))
  });

  // Load the form page
  app.get("/form", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/form.html"))
  });

  // Leftovers from boiler plate code
  app.get("/example/:id", function (req, res) {
    db.Form.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
