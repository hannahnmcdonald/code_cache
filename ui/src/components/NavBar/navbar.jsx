import { NavLink } from 'react-router-dom';
import { notes } from '../notesList';
import logo from '../../img/codecache.png';
import './navbar.css';

export default function Navbar() {
  return (
    <>
      <nav>
      <img src={logo} alt="CodeCache Logo" style={{ paddingBottom: '1rem'}}/>
        <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map(note => (
          <li key={note.id}>
            <NavLink
              to={`/note/${note.id}`}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {note.title}
            </NavLink>
          </li>
        ))}
      </ul>
      </nav>
    </>
  );
}
