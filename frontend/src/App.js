import {useState, useEffect} from "react";
import NotesList from "./components/NotesList";
import NoteService from './services/NoteService';


const App = () => {

  var [showArchived,setShowArchived]=useState(false);

  const [notes,setNotes]=useState([])
    useEffect(()=>{getAllNotes();},[]);
      const getAllNotes=()=>{
      NoteService.getAllNotes().then((response)=>{
      setNotes(response.data);
    }).catch(error =>{
      console.log(error);
    })
  }
  
  const addNote=(text)=>{
    const newNote={
      text:text,
      isArchived:false
    }
    const newNotes=[...notes, newNote];
    NoteService.newNote(newNote).then((response)=>{
      newNote.id=response.data.id;
      setNotes(newNotes);
    }).catch(error=>{
      console.log(error);
    });
  }
  
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=> note.id!==id);
      NoteService.deleteNote(id).then(()=>{
      setNotes(newNotes);
    }).catch(error=>{
      console.log(error);
    });
  }

  const editNote=(id,newText)=>{
    /* La edición de notas no funcionó, me faltó aprender un poco más sobre React (
      probablemente usar el EditNote.js en la NotesList.js)

     let foundNote=notes.find((note)=>note.id===id);
    foundNote.text=newText;
    NoteService.updateNote(id,foundNote).then(()=>{
      getAllNotes();
    }).catch(error=>{
      console.log(error);
    }); */
  }
  
  const archiveNote=(id)=>{
    const foundNote=notes.find((note)=>note.id===id);
    foundNote.isArchived=!foundNote.isArchived;
    NoteService.updateNote(id,foundNote).then(()=>{
      getAllNotes();
    }).catch(error=>{
      console.log(error);
    });
  }

  const toggleArchivedNotes=()=>{
    setShowArchived(showArchived => !showArchived);
  }

  return (
  <div className="container">
    <button className="button" id="toggle" onClick={toggleArchivedNotes}>show / hide archived notes</button>
    <NotesList 
    notes={notes.filter((note)=>note.isArchived===showArchived)} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    handleEditNote={editNote}
    handleArchiveNote={archiveNote}
    ></NotesList>
  </div>
  );
}; 

export default App;