import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotesMarket = [];
  const [notes, setNotes] = useState([]);
  const [notesMarket, setNotesMarket] = useState(initialNotesMarket);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    });

    const json = await response.json();
    if (response.ok) {
        setNotes(json);
    } else {
        console.error(json);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag, content) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag, content })
      });

      const note = await response.json();
      setNotes((prevNotes) => [...prevNotes, note]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const json = await response.json();
      console.log(json);

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag, content) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag, content })
      });
      const json = await response.json();
      console.log(json);

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag, content } : note
        )
      );
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  // Get Notes for Market
  const getNotesMarket = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const json = await response.json();
      setNotesMarket(json);
    } catch (error) {
      console.error("Error fetching notes market:", error);
    }
  };
  
  // Function to mark the note as sold
// NoteState.js

const markAsSold = async (id) => {
  try {
    const response = await fetch(`${host}/api/notes/markassold/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();

    setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    setNotesMarket((prevNotesMarket) => (Array.isArray(prevNotesMarket) ? [...prevNotesMarket, json.note] : [json.note]));

    // Optionally, refresh the notes market list
    getNotesMarket();
  } catch (error) {
    console.error("Error marking note as sold:", error);
  }
};




  return (
    <NoteContext.Provider value={{ notes, notesMarket, addNote, deleteNote, editNote, getNotes, getNotesMarket,markAsSold }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
