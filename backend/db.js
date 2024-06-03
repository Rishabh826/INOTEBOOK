

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";
const connectToMongo =()=>{
    mongoose.connect(mongoURI)
  
    .then(() => {
        console.log("DB successfully connected");
    })
    .catch((err) => {
        console.log("DB CONNECTION ISSUES");
        console.error(err);
        process.exit(1);
        })
}
module.exports = connectToMongo;