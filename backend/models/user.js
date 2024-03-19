const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    Name:{
        type : String,
    },
    username:{
    type: String,
   
    },

  password:{
    type: String,

  },
  email:{
type: String,
unique: true
  }
  });
  const user =mongoose.model('user',userSchema);
  user.createIndexes();
  module.exports = user