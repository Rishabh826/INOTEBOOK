import React from 'react'
import Notesitem  from './Notesitem'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>My NOTES</h1>
      <div className="d-flex justify-content-end" style={{paddingRight:'2rem'}}>
      <Link type="button" className="btn btn-light"  to="/Addnotes"> <i className="fa-duotone fa-plus"></i> ADD NOTES</Link>
      </div>
      <Notesitem/>
    </div>
  )
}

export default Home
