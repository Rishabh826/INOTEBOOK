import React, { useContext, useEffect } from 'react'
import Notecontext from '../context/Notecontext'
const About = () => {
const a = useContext(Notecontext);
useEffect(()=>{
    a.update();
},[])
  return (
    <div  style={{marginTop:'50px'}}>
      <h1>
        THIS is {a.state.name}   and in class{a.state.class}
      </h1>
    </div>
  )
}

export default About
