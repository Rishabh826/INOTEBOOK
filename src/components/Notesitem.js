import React, { useContext, useEffect, useLayoutEffect } from 'react';
import Notecontext from '../context/Notecontext';
import Notescard from './Notescard';

const Notesitem = () => {
    const Context = useContext(Notecontext);
    const { notes,getallnotes } = Context;
useEffect(()=>{
  getallnotes()
},[])
    return (
        <div className="container my-3">
            <div className="row">
                {notes.map((note, index) => (
                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <Notescard note={note} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notesitem;
