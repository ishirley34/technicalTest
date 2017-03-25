var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

router.delete('/:person_id/tasks/:id', function(req, res) {
  models.Task.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbTask) {
    res.json(dbTask);
  });
});

module.exports = router;
