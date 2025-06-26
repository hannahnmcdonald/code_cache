import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notes } from './notesList';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';

const baseUrl = import.meta.env.VITE_PUBLIC_URL;

export default function NoteViewer() {
  const { id } = useParams();
  const [content, setContent] = useState('Loading');

  useEffect(() => {
    const note = notes.find(n => n.id === id);
    if (note) {
      fetch(`${baseUrl}/notes/${note.file}`)
        .then(res => res.text())
        .then(setContent);
    } else {
      setContent('# Note not found');
    }
  }, [id]);

  useEffect(() => {
  const handleHashChange = () => {
    const hash = decodeURIComponent(window.location.hash.split('#')[1]);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Trigger on initial load
  handleHashChange();

  // Listen to hash changes
  window.addEventListener('hashchange', handleHashChange);
  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);


  if (!content) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }} className="markdown-body">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
      />
    </div>
  );
}
