'use strict';


const  Task = require('../models/todoListModel');

exports.list_all_tasks = function(req, res) {
  Task.find({})
  .then( task=>{
    console.log(task);
    res.status(200).send({
      error: false,
      message: 'succesfully fetched all todos',
      response: task
    });
  })
  .catch( err=>{
    console.log(err)
  })
};


exports.create_a_task = function(req, res) {
  let new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.deleteOne({
    _id: req.params.taskId},
     function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });

};

exports.delete_all = function(req, res) {
Task.deleteMany({},
    function(err, task) {
   if (err)
     res.send(err);
   res.json({ message: 'Tasks successfully deleted' });
 });

};