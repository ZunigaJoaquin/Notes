import {useState} from 'react';

const AddNote = ({handleAddNote}) => {
    const[noteText,setNoteText]=useState();

    const handleChange=event=> {
        event.preventDefault();
        setNoteText(event.target.value);
    }
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(<div className='note new'>
        <textarea rows='8' cols='10' placeholder='New note...' value={noteText} onChange={handleChange} autoFocus></textarea>
        <div className='noteFooter'/>
        <button className='button' onClick={handleSaveClick}>Save</button>
    </div>)
}

export default AddNote;