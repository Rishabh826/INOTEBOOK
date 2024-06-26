import React, { useContext } from 'react';
import noteContext from '../context/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

   const speek = () => {
        // Create a new SpeechSynthesisUtterance object with the note content
        var uttern = new SpeechSynthesisUtterance(note.content ? note.content : 'Content not available');
        // Speak the text
        speechSynthesis.speak(uttern);
    };
    const stop =()=>{
      speechSynthesis.cancel();
    }

    return (
        <div className="card mx-4" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Title: {note.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Tag: {note.tag}</h6>
                <p className="card-text">Description: {note.description}</p>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Read More
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable mx-2">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Full Note</h5>
                                <button type="button" className="btn btn-primary mx-4" onClick={speek}>AI speak</button>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={stop}></button>
                            </div>
                            <div className="modal-body">
                                content: {note.content ? note.content : 'Content not available'}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={stop}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <i className="far fa-trash-alt mx-2" onClick={() => { deleteNote(note._id) }}></i>
                <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
            </div>
        </div>
    );
};

export default Noteitem;
