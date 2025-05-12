# PixCrab App

A real-time synchronized photo capture application built with the Model-Controller-Presenter (MCP) architecture.

## Features

- Synchronized photo capture across multiple devices
- Real-time session management
- Photo combination between participants
- User authentication (Google, Apple, or Guest)
- Photo gallery and sharing capabilities
- Responsive design for mobile and desktop

## Technology Stack

- HTML, CSS, JavaScript
- Firebase (Authentication, Real-time Database, Storage)
- Model-Controller-Presenter (MCP) architecture
- QR Code generation for easy session sharing

## Project Structure

This project follows the MCP (Model-Controller-Presenter) architecture:

```
src/
├── models/        # Data models
├── controllers/   # Business logic controllers
├── presenters/    # UI presentation logic
├── services/      # External service integrations
└── utils/         # Utility functions
```

For more details on the architecture, see [src/README.md](src/README.md).

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pixcrab.git
   cd pixcrab
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create Firebase configuration:
   - Create a project in the [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Google, Apple, Anonymous)
   - Enable Realtime Database and Storage
   - Copy `firebase-config.example.js` to `firebase-config.js`
   - Update with your Firebase project details

4. Run locally:
   ```
   npm run dev
   ```

## Deployment to Netlify

1. Push your code to GitHub
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add Firebase environment variables in the Netlify dashboard
7. Deploy!

## Testing

To manually test your application:

1. Run the app in two different browser windows
2. Create a session in one window
3. Join the session in another window using the session ID or QR code
4. Capture photos and verify they combine correctly

## License

[MIT License](LICENSE)

## Credits

Created by [Your Name]

Want more information about the MCP architecture? Run:
```
./mcp-info.sh
```
