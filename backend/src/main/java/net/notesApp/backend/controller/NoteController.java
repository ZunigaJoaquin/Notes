package net.notesApp.backend.controller;

import net.notesApp.backend.exception.ResourceNotFoundException;
import net.notesApp.backend.model.Note;
import net.notesApp.backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/notes")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping
    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    // build create employee REST API
    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }

    // build get employee by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable  long id){
        Note note= noteRepository.findById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("Note with id: " + id + "does not exist"));
        return ResponseEntity.ok(note);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Note> updateNote(@PathVariable long id,@RequestBody Note note) {
        Note updatedNote = noteRepository.findById(id)
        		.orElseThrow(() -> new ResourceNotFoundException("Note with id: " + id + "does not exist"));

        updatedNote.setText(note.getText());
        updatedNote.setIsArchived(note.getIsArchived());

        noteRepository.save(updatedNote);

        return ResponseEntity.ok(updatedNote);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteNote(@PathVariable long id){

        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Note with id: " + id + "does not exist"));

        noteRepository.delete(note);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
