import React, { useState, useContext } from 'react';
import Notecontext from '../context/Notecontext';
import Alert from './Alert';

const Addnotes = () => {
  const Context = useContext(Notecontext);
  const { Addnotes } = Context;
  
  const [notes, setnotes] = useState({ title: "", description: "", tags: "default" });
  const [alert, setAlert] = useState({ show: false, message: "" });

  const handleclick = (e) => {
    e.preventDefault();
    Addnotes(notes.title, notes.description, notes.tags);
    setAlert({ show: true, message: "Notes have been successfully added to the cloud. They will be securely stored in the cloud." });
    
    // Clear the form fields
    setnotes({ title: "", description: "", tags: "default" });
    
    // Hide the alert after 3 seconds
    setTimeout(() => setAlert({ show: false, message: "" }), 3000);
  }

  const onchange = (e) => {
    setnotes({ ...notes, [e.target.name]: e.target.value });
  }

  return (
    <div>
      {alert.show && <Alert message={alert.message} />}
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} value={notes.title} required  />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description"  name="description" onChange={onchange} value={notes.description}   required />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <input type="text" className="form-control" id="tags" name="tags" onChange={onchange} value={notes.tags}  required />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </form>
    </div>
  );
}

export default Addnotes;
