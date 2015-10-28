var mongoose = require('mongoose-q') (require('mongoose'), {spread:true});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Guitar = new Schema({
  name: String,
  model: String,
  no_strings: Number,
  hollow_body: Boolean
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/guitars');
module.exports = mongoose.model('guitars', Guitar);
