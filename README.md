# Minimalist PDF Viewer

A minimalist Next.js application for viewing PDFs with a clean black background.

## Features

- Simple and straightforward PDF viewing
- Fullscreen display
- Pure black background
- Uses the browser's built-in PDF viewer capabilities
- Responsive design
- Works completely offline

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the application for production:

```bash
pnpm build
```

The build output will be in the `out` directory, which can be deployed to any static hosting service like Vercel, Netlify, GitHub Pages, or any web server.

## How It Works

This PDF viewer uses the browser's built-in PDF viewing capabilities via the HTML `<object>` tag with:
- No UI elements
- Pure black background
- Fullscreen display

## Deployment Options

1. **Vercel**: Push to GitHub, GitLab, or Bitbucket and connect to Vercel for automatic deployments.

2. **Netlify**: Push to GitHub, GitLab, or Bitbucket and connect to Netlify for automatic deployments.

3. **GitHub Pages**: Push the `out` directory to a GitHub repository and enable GitHub Pages.

4. **Any Static Host**: Upload the contents of the `out` directory to any web server or static file hosting service.

## Using the Standalone Version

A standalone HTML version is also available at `/standalone.html`. This provides an even simpler version that can be used independently of Next.js.

## Dependencies

- Next.js
- React