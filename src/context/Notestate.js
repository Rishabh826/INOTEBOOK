import { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate = (props) => {
  const initialState = {
    name: "Rishabh",
    class: "10a"
  };
  const [state, setState] = useState(initialState);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "rishu",
        class: "11"
      });
    }, 2000);
  };

  return (
    <Notecontext.Provider value={{ state, update }}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
