const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the dist directory with correct content types
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // Set the correct content type for HTML files
      res.setHeader('Content-Type', 'text/html');
    } else if (filePath.endsWith('.js')) {
      // Set the correct content type for JavaScript files
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      // Set the correct content type for CSS files
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// For any route that doesn't match a static file, serve index.html (for SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`PixCrab app serving at http://localhost:${port}`);
});
