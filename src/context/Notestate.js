import { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate = (props) => {
  const initialState = [
  ];
  const host = "http://localhost:5000";
    

  // GET all notes 
  const getallnotes =async()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        "Content-Type": "application/json",
        
          "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzM5ZTVjYTNhNTE5ZDk4NDczYjNlIn0sImlhdCI6MTcxNTY4MTc2NX0.7ehcs3MVcIPfc28Qf5AR5-T3HhZ2GlhJ9wluw_5MFPM"
        
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     
      body: JSON.stringify(), // body data type must match "Content-Type" header
    });
    return response.json();
  }
  const [notes, setnotes] = useState(initialState);

 const Addnotes =async(title,description,tags)=>{

//api call
const response = await fetch(`${host}/api/notes/addnotes`, {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
 
  headers: {
    "Content-Type": "application/json",
    "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0MzM5ZTVjYTNhNTE5ZDk4NDczYjNlIn0sImlhdCI6MTcxNTY4MTc2NX0.7ehcs3MVcIPfc28Qf5AR5-T3HhZ2GlhJ9wluw_5MFPM"
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
 
  body: JSON.stringify({title,description,tags}), // body data type must match "Content-Type" header
});
const json= response.json();


   const note={ "user": "6641e10d7wf3ed083f8bbf4ae",
  "title": title,
  "description":description ,
  "tag": tags,
  "_id": "6641e1f9cafsfcc5749c66552",
  "date": "2024-05-13T09:48:41.610Z",
  "__v": 0
 }
   setnotes(notes.concat(note))
  }


  // Delete notes 
  const deletenote =async(id)=>{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     
      body: JSON.stringify({id}), // body data type must match "Content-Type" header
    });
    const json =response.json();
    const newdel = notes.filter((note)=>{return note._id!==id})
    setnotes(newdel)
 }

 //Edit Notes 

 const editnotes=async(id,title,description,tags)=>{
  for (let index = 0; index < notes.length; index++) {
    const element =notes[index];
    if(element.id===id){
      element.title=title;
      element.description=description;
      element.tags=tags
    }
    
  }
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
   
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   
    body: JSON.stringify({id,title,description,tags}), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

 
  return (
    <Notecontext.Provider value={{ notes, Addnotes,deletenote,editnotes,getallnotes}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
