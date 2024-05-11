const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
    title:{
       type : String
    } ,
    tags:{
      type:String
    } ,
    Description:{
      type:String
    } ,
    
    date: { type: Date, default: Date.now },
  
   
  });
  
  const note =mongoose.model('note',noteSchema);
  note.createIndexes();
  module.exports = note