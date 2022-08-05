import axios from 'axios';

const NOTE_BASE_REST_API_URL='http://localhost:8080/api/v1/notes';

class NoteService{
    getAllNotes(){
        return axios.get(NOTE_BASE_REST_API_URL);
    }

    newNote(note){
        return axios.post(NOTE_BASE_REST_API_URL,note);
    }
    
    deleteNote(id){
        return axios.delete(NOTE_BASE_REST_API_URL + "/" + id);
    }

    updateNote(id,note){
        return axios.put(NOTE_BASE_REST_API_URL + "/" + id, note);
    }
}

export default new NoteService();