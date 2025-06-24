import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notes } from './notesList';
import ReactMarkdown from 'react-markdown';

export default function NoteViewer() {
  const { id } = useParams();
  const [content, setContent] = useState('Loading');
  console.log(content)

  useEffect(() => {
    const note = notes.find(n => n.id === id);
    console.log('fetching:', `/notes/${note?.file}`);
    console.log(note)
    if (note) {
      fetch(`/notes/${note?.file}`)
        .then(res => res.text())
        .then(setContent);
    } else {
      setContent('# Note not found');
    }
  }, [id]);

  if (!content) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
