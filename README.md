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

## Automatic Domain Authorization for Firebase

PixCrab includes a tool to automatically update Firebase authorized domains when new Netlify deployments occur. This is especially useful for preview deployments that have unique URLs.

### Setup

1. **Create a Firebase Service Account**:
   - Go to your [Firebase Console](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk)
   - Select your project
   - Go to "Project settings" > "Service accounts"
   - Click "Generate new private key"
   - Save the JSON file as `firebase-service-account.json` in the root of this project

2. **Get a Netlify Personal Access Token**:
   - Go to [Netlify User Settings](https://app.netlify.com/user/applications)
   - Under "Personal access tokens", create a new token
   - Save this token securely

3. **Run the Automated Process**:
   ```bash
   # Set your Netlify token as an environment variable
   export NETLIFY_TOKEN=your_netlify_personal_access_token
   
   # Run the script to push to GitHub and update Firebase domains
   ./scripts/update-github-netlify.sh
   ```

This script will:
1. Push your changes to GitHub
2. Wait for Netlify to start deployment
3. Retrieve the new domain from the Netlify API
4. Add it to Firebase authorized domains
5. Update your app's base URL

### Important Files

- `scripts/authorize-domain.js`: Node.js script that interfaces with Netlify and Firebase APIs
- `scripts/update-github-netlify.sh`: Shell script that orchestrates the entire workflow
- `firebase-service-account.json`: Your Firebase service account credentials (not included in repo)

### Notes

- Keep your service account JSON and Netlify token secure
- The service account needs Firebase Authentication Admin permissions
- For security, the `firebase-service-account.json` file is in `.gitignore` to prevent it from being accidentally committed

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
