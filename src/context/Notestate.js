import { useState } from "react";
import Notecontext from "./Notecontext";

const Notestate = (props) => {
  const initialState = [
    {
      "user": "6641e10d7f3edw083f8bbf4ae",
      "title": "dhbsabdkjas",
      "description": "sjdnakd",
      "tag": "jsadnjaskdn",
      "_id": "6641e1f9caffcc5749c66552",
      "date": "2024-05-13T09:48:41.610Z",
      "__v": 0
    },
    {
      "user": "6641e10d7f3ed08w3f8bbf4ae",
      "title": "dhbsabdkjas",
      "description": "sjdnakd",
      "tag": "jsadnjaskdn",
      "_id": "6641e1f9caffcc5749c66552",
      "date": "2024-05-13T09:48:41.610Z",
      "__v": 0
    },
    {
      "user": "6641e10d7f3ed083fw8bbf4ae",
      "title": "dhbsabdkjas",
      "description": "sjdnakd",
      "tag": "jsadnjaskdn",
      "_id": "6641e1f9caffcc5749c66552",
      "date": "2024-05-13T09:48:41.610Z",
      "__v": 0
    },
    {
      "user": "6641e10d7wf3ed083f8bbf4ae",
      "title": "dhbsabdkjas",
      "description": "sjdnakd",
      "tag": "jsadnjaskdn",
      "_id": "6641e1f9caffcc5749c66552",
      "date": "2024-05-13T09:48:41.610Z",
      "__v": 0
    }
  ];
  const [notes, setnotes] = useState(initialState);

 

  return (
    <Notecontext.Provider value={{ notes, setnotes}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
