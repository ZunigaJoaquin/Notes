package net.notesApp.backend.repository;

import net.notesApp.backend.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface NoteRepository extends JpaRepository<Note, Long> {
    // all crud database methods
}