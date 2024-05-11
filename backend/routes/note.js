const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const note = require('../models/note');
// routes 1 : featch all notes   : Login requied
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try {
        const notes = await note.find({user: req.user.id});
        res.json({notes});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
  
})
// routes 2 : Add all notes   : Login requied
router.post('/addnotes',fetchuser,  [
    body('title').isLength({ min: 3 }),
    body('Description').isLength({ min: 5 }),
   
], async (req,res)=>{
    try {
        const {title,tags,Description} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });}

            const Notes = new note({
                title,tags,Description,user: req.user.id
            })
            const savednotes = await Notes.save();
           return  res.json({savednotes});
    } catch (error) {
        console.error(error.message);
      

    }
 

//  routes 3 : update  notes   : Login requied
router.put('/updatenote/:id',fetchuser,async (req,res)=>{
    try {
          const {title,tags,Description} = req.body;
          const newnote = {};
          if(title){newnote.tile==title};
          if(tags){newnote.tags==tags};
          if(Description){newnote.Description==Description};
          // find  aND UPDATE THE UPDATES 
          let Note = await note.findById(req.params.id);
          if(!Note){ return res.status(401).send("yha kuch nhi ha bhai chla ja")};
          if(Note.user.tostring()!=req.user.id){
         return   res.status(401).send("galat id h");
          }

          Note = await note.findByIdAndUpdate(req.param.id,{$set: newnote},{new:true});
          res.json({newnote});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
  
})
    
})

//  routes 3 : update  notes   : Login requied
router.delete('/delete/:id',fetchuser,async (req,res)=>{
    try {
          const {title,tags,Description} = req.body;
         
          // find  AND deleted THE delete 
          let Note = await note.findById(req.params.id);
          if(!Note){ return res.status(401).send("yha kuch nhi ha bhai chla ja")};
          if(Note.user.tostring()!=req.user.id){
         return   res.status(401).send("galat id h");
          }

          Note = await note.findOneAndDelete(req.param.id);
          res.json({"success": "notes has been deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
  
})
    

module.exports = router