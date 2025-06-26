import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { notes } from './notesList';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { visit } from 'unist-util-visit';
import { nanoid } from 'nanoid';

const baseUrl = import.meta.env.VITE_PUBLIC_URL;

// Custom plugin to override link behavior
function remarkHandleTocLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url && node.url.startsWith('#')) {
        const id = node.url.slice(1);
        const text = node.children[0]?.value || id;
        node.data = {
          hName: 'a',
          hProperties: {
            href: `#${id}`,
            onClick: (e) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              window.history.replaceState(null, '', `#${id}`);
            },
          },
          hChildren: [{ type: 'text', value: text }],
        };
      }
    });
  };
}

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
        remarkPlugins={[remarkGfm, remarkHandleTocLinks]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
      />
    </div>
  );
}
