package rufina.infra.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rufina.infra.domain.Note;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {

}
