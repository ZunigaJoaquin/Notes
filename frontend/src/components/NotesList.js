import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({notes, handleAddNote, handleDeleteNote, handleArchiveNote, handleEditNote}) =>{
    return (<div className='notesList'>
        {notes.map((note)=> (
        <Note 
        id={note.id} 
        text={note.text}
        handleDeleteNote={handleDeleteNote}
        handleArchiveNote={handleArchiveNote}
        handleEditNote={handleEditNote}
        />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
    </div>
    )
}

export default NotesList;