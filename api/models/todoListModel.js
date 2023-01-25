var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({

    task_title :{
        type: String,
        required: 'Enter the title here please',
        default: 'title'
    },
  task_des: {
    type: String,
    required: 'Kindly enter the task here',
    default:'your description please'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tasks', TaskSchema);
