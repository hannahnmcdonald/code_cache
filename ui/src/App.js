import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar/navbar'
import NoteViewer from './components/noteViewer'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/note/note1" replace />} />
            <Route path="/note/:id" element={<NoteViewer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
