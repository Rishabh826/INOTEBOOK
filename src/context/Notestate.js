import { useState } from "react";
import Notecontext from "./Notecontext";

  const Notestate=(props)=>{
        const c1 ={
            "name":"Rishabh",
            "class":"10a"

        }
        const [state,setstate] = useState(c1);
        const update =()=>{
            setTimeout(() => {
                setstate={
                      "name":"Tanya",
                      "class":"8"
                }
            },1000);
        }
  
  return(
    <Notecontext.Provider  value={{state,update}}>
   {props.children}
    </Notecontext.Provider>
  )}