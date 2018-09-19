var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{db: {
      readPreference: "secondaryPreferred",
    }});

module.exports = {mongoose};
