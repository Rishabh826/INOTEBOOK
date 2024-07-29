import React from 'react';
import '../index.css';

function NotesMarket() {
    const storage =     localStorage.getItem('storage');

  return (
    <div className="container">
        <nav className="nav-market" style={{textAlign:'center',marginTop:'2rem',borderBottom:'2px solid black', textShadow:'2px 2px black'}} >
           <span> <h1> <strong> Welcome To NotesMarket </strong></h1></span>
        </nav>
        
        <div class="input-container" style={{marginLeft:'15rem',marginTop:'2rem'}}>
           
    <input type="text" name="text" class="input" placeholder="Search Notes..."/>
  <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" class="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white" height="24" width="24"></rect> <path fill="" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
    </div>
     <div className="sellcards">

     <div class="scard">
<div class="image"><span class="text">
<h5 className="scard-title">Title:{storage.title} </h5>
                <h6 className="scard-subtitle mb-2 text-muted">Tag:{storage.Tag}</h6>
                <p className="scard-text">Description:{storage.Description} </p>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    more
                </button></span></div>
  <span class="title">Cool Chair</span>
 

  <span class="price">$100</span>
</div>
     </div>
      
    </div>
  )
}

export default NotesMarket
