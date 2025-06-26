import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notes } from './notesList';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

export default function NoteViewer() {
  const { id } = useParams();
  const [content, setContent] = useState('Loading');

  useEffect(() => {
    const note = notes.find(n => n.id === id);
    if (note) {
      fetch(`/notes/${note.file}`)
        .then(res => res.text())
        .then(setContent);
    } else {
      setContent('# Note not found');
    }
  }, [id]);

  if (!content) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }} className="markdown-body">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
      />
    </div>
  );
}
