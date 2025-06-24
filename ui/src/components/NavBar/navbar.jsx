import { Link } from 'react-router-dom';
import { notes } from '../notesList';

export default function Navbar() {
  return (
    <nav style={{ width: '200px', padding: '1rem', borderRight: '1px solid #ccc' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
