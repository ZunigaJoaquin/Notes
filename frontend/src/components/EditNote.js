import {useState} from 'react';

const EditNote = ({handleEditNote,previousText}) => {
    const[noteText,setNoteText]=useState(previousText);

    const handleChange=event=> {
        event.preventDefault();
        setNoteText(event.target.value);
    }
    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleEditNote(noteText);
            setNoteText('');
        }
    }

    return(<div className='note new'>
        <textarea rows='8' cols='10' value={noteText} onChange={handleChange} autoFocus></textarea>
        <div className='noteFooter'/>
        <button className='button' onClick={handleSaveClick}>Save</button>
    </div>)
}

export default EditNote;