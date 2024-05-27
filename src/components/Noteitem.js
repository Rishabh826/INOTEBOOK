import React, {useContext} from 'react'
import noteContext from "../context/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="card mx-4" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title"> Title: {note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted"> Tag: {note.tag}</h6>
          <p className="card-text"> Description: {note.description}</p>
        
         
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Read More
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Full Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="card card-body">
     content:  {note.content ? note.content : 'Content not available'}
</div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
          <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
<i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    )
}

export default Noteitem