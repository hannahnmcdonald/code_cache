# CodeCache

**CodeCache** is a personal app designed to organize and view your software development notes and bookmarks. It supports rendering Markdown files with a clean interface, custom styling, and smooth in-page navigation.

This project helps me consolidate resources and concepts I’ve studied across various technologies like AWS, React, TypeScript, Security, and more.

---

## ✨ Features

- 📚 View organized Markdown notes by topic
- 🔖 Bookmark web development resources
- 🧭 Table of Contents with anchor links for fast navigation
- 🎨 Custom styles for links, code blocks, and responsive images
- 🌙 Ready for light or dark theme expansion
- 🚀 Easy to deploy with GitHub Pages

---

## 🛠️ Technologies

- React
- React Router
- `react-markdown` with:
  - `remark-gfm` (GitHub-flavored Markdown support)
  - `rehype-slug` (adds `id`s to headings for anchor links)
- HTML/CSS

---

## 🚀 Deployment

To deploy the app using GitHub Pages:

1. Install the deployment dependency:
   ```bash
   npm install gh-pages
   ```

2. Add these to your `package.json`:

   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Run:
   ```bash
   npm run deploy
   ```

Then go to your repo → Settings → Pages → set source to `gh-pages` branch.

---

## 🗂️ Notes Structure

Markdown files live in the `public/notes` directory and are listed in the `notes.js` array. Example entries:

```js
export const notes = [
  { id: 'AWS_CCP', title: 'AWS CCP Study Notes', file: 'AWS_CCP.md' },
  { id: 'React', title: 'React', file: 'React.md' },
  { id: 'Security', title: 'Security', file: 'Security.md' },
];
```

---

## 🙋‍♀️ Why I Built This

I created CodeCache to serve as my own developer "second brain" — a central place to collect everything I'm learning, from API patterns to DevOps practices. It's fast, minimal, and built just for me.

---

## 🧠 Topics Covered

- AWS
- Accessibility
- APIs
- CSS
- Docker
- GraphQL
- JavaScript
- Kafka
- NestJS
- Python
- React
- Relational Databases
- Security
- Testing
- TypeScript
- ...and more

---

## 🧪 Future Ideas

- Light/Dark theme toggle
- Search bar
- Note editing from the UI
- Tagging and filtering
- Mobile-friendly layout

---

## 📎 License

This project is for personal use. Feel free to fork and adapt for your own learning system!
