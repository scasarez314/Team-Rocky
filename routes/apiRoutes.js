var db = require("../models");

module.exports = function (app) {

  // Get all fields from Form variable defined in Models -- Form.js
  app.get("/api/events", function (req, res) {
    db.Form.findAll({}).then(function (dbForm) {
      res.json(dbForm);
    });
  });

  // Create a new example
  app.post("/api/events", function (req, res) {
    console.log (req.body);
    // res.json({ msg: "I work!"});
    db.Form.create({
      name: req.body.name,
      email: req.body.email,
      date: req.body.date,
      zipcode: req.body.zipcode,
      description: req.body.description
    }).then(function (dbForm) {
      res.json(dbForm);
    });
  });

  // Delete an example by id
//   app.delete("/api/examples/:id/", function (req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
//       res.json(dbExample);
//     });
//   });
};
