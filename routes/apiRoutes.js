var db = require("../models");

module.exports = function(app) {
  // Get all fields from Form variable defined in Models -- Form.js
  app.get("/api/events", function(req, res) {
    db.Form.findAll({}).then(function(dbForm) {
      res.json(dbForm);
    });
  });

  // Create a new event
  app.post("/api/events", function(req, res) {
    console.log(req.body);
    // res.json({ msg: "I work!"});
    db.Form.create({
      name: req.body.name,
      telephone: req.body.telephone,
      email: req.body.email,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description
    }).then(function(dbForm) {
      res.json(dbForm);
    });
  });

  //GET request for map

  // PUT route for updating Events
  app.put("/api/events/:id", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Form.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbForm) {
      res.json(dbForm);
    });
  });

  //Ajax DELETE an event
  // DELETE route for deleting posts
  app.delete("/api/events/:id", function(req, res) {
    db.Form.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForm) {
      res.json(dbForm);
    });
  });
};
