import React from 'react'

const Notescard = (props) => {
    const {note}=props
  return (
    <div>
      <div className="card mx-4" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <i className="fa-solid fa-trash mx-4"></i>
    <i className="fa-sharp fa-regular fa-pen-to-square"></i>
  </div>
</div>
    </div>
  )
}

export default Notescard
