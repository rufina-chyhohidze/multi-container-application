package rufina.infra.controller;

import org.springframework.web.bind.annotation.*;
import rufina.infra.repository.NoteRepository;
import rufina.infra.domain.Note;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private final NoteRepository repo;

    public NoteController(NoteRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return repo.save(note);
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return (List<Note>) repo.findAll();
    }
}
