import React, { useContext } from 'react'
import Notecontext from '../context/Notecontext'
import Notescard from './Notescard';
const Notesitem = () => {
    const Context = useContext(Notecontext);
    const {notes,setnotes} = Context;
  return (
    <div className="d-flex flex-row bd-highlight mb-2 my-3 mx-5">
      {notes.map((note)=>{
         return   <Notescard   note={note}/>
      })}
    </div>
  )
}

export default Notesitem
