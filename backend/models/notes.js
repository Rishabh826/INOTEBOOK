const mongoose = require('mongoose');
const notesSchema = new Schema({
    title: String, 
    tags: String,
    
    date: { type: Date, default: Date.now },
    hidden: Boolean,
   
  });
  
  module.exports = mongoose.model('notes',notesSchema);