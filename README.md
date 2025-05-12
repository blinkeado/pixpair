# PixCrab

PixCrab is a real-time synchronized photo capture application. It allows multiple users to join a session and capture photos that are instantly shared with all participants.

## Live Demo

Visit the live application at: [https://blinkeado.github.io/pixpair/](https://blinkeado.github.io/pixpair/)

## Features

- User authentication (email/password, Google, or anonymous)
- Create or join photo capture sessions
- Real-time photo sharing
- Mobile-friendly interface
- QR code generation for easy session sharing
- Copy session ID functionality

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/blinkeado/pixpair.git
   cd pixpair
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Firebase Configuration

This application uses Firebase for authentication, real-time database, and storage. The Firebase configuration is directly included in the `index.html` file.

#### Setting up CORS for Firebase Storage

To allow the application to upload images to Firebase Storage from different domains (including localhost), you need to configure CORS:

1. Install the Firebase CLI if you haven't already:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Set CORS configuration for your Firebase Storage bucket:
   ```
   firebase storage:cors update cors.json
   ```

The `cors.json` file is already included in the repository.

### Deploying to GitHub Pages

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/pixpair"
   ```

2. Use the deployment script:
   ```
   ./build-and-deploy.sh
   ```

### Deploying to Netlify

1. Make sure you have the Netlify CLI installed:
   ```
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```
   netlify login
   ```

3. Use the Netlify deployment script:
   ```
   ./build-and-deploy.sh netlify
   ```

## How to Use

1. Sign in with your preferred method (email, Google, or as a guest)
2. Create a new session or join an existing one with a session ID
3. Grant camera permissions when prompted
4. Take photos that will be automatically shared with all session participants
5. Share the session with others using the generated QR code or by copying the session ID

## Troubleshooting

If you encounter any issues:

1. **Firebase Configuration**: Make sure your Firebase configuration is correct in the index.html file.

2. **CORS Issues**: If you're having CORS issues with Firebase Storage:
   - Run the Firebase CORS configuration command: `firebase storage:cors update cors.json`
   - Make sure your Firebase Storage rules allow the necessary access
   - Check that your app's domain is authorized in Firebase Console

3. **Authentication Issues**: 
   - Ensure Firebase Authentication has your domain listed in the authorized domains
   - For local development, add "localhost" to the authorized domains

4. **Camera Access**: 
   - Make sure you've granted camera permissions to the website
   - Use HTTPS, as many browsers require secure contexts for camera access

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Developed by Carlos P Jara
