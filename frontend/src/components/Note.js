import {MdDeleteForever, MdEdit} from 'react-icons/md';
import {MdArchive} from 'react-icons/md';

const Note=({id,text, handleDeleteNote, handleArchiveNote, handleEditNote})=>{
    return(
        <div className="note">
            <span>{text}</span>
            <div className="noteFooter">
                <MdArchive
                className='icon' 
                size='1.3em'
                onClick={() => handleArchiveNote(id)}/>
                <MdEdit
                id='editIcon'
                className='icon'
                onClick={() => handleEditNote(id, text)}/>
                <MdDeleteForever 
                className='icon' 
                size='1.3em'
                onClick={() => handleDeleteNote(id)}/>
            </div>
        </div>
    );
};

export default Note;