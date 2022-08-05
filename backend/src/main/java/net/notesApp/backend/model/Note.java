package net.notesApp.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "text")
    private String text;

    @Column(name = "isArchived")
    private boolean isArchived;
    
    public String getText() {
    	return text;
    }
    
    public boolean getIsArchived() {
    	return isArchived;
    }
    
    public void setText(String text) {
    	this.text=text;
    }
    
    public void setIsArchived(boolean isArchived) {
    	this.isArchived=isArchived;
    }
    
    public long getId() {
    	return id;
    }
}
