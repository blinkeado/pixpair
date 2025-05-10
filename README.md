# PixCrab - Synchronized Photo Capture

PixCrab is a web application that allows users to capture photos simultaneously across devices. Perfect for creating synchronized photos with friends and family, no matter where they are.

## Features

- **Synchronized Photo Capture**: Take photos at exactly the same time across multiple devices
- **Session Management**: Create or join sessions with a simple ID or QR code
- **Real-time Connection**: Firebase-powered real-time communication
- **Gallery View**: View combined photos in an integrated gallery
- **Cross-platform**: Works on any device with a browser and camera

## Technology Stack

- HTML5, CSS3, JavaScript
- Tailwind CSS for styling
- Firebase (Authentication, Realtime Database, Storage)
- Web APIs (Camera, Web Share, etc.)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pixcrab.git
   cd pixcrab
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Google, Apple, and Anonymous providers)
   - Enable Realtime Database
   - Enable Storage
   - Update the Firebase configuration in `firebase-config.js`

4. Build the CSS:
   ```
   npm run build
   ```

5. Serve locally:
   ```
   firebase serve
   ```

## Deployment

1. Set up Firebase hosting:
   ```
   firebase init hosting
   ```

2. Deploy to Firebase:
   ```
   ./deploy.sh
   ```

## Usage

1. **Sign In**: Use Google, Apple, or continue as a guest
2. **Create a Session**: Click "Create New Session" to generate a session ID
3. **Share**: Share the session ID or QR code with a friend
4. **Capture**: Both users click the capture button to take synchronized photos
5. **View**: Swipe up to view the combined photos in the gallery
6. **Share/Download**: Use the buttons to share or download your combined photos

## Security Rules

The application uses Firebase Security Rules to ensure that:
- Session data is accessible to all participants
- User photos are private
- Combined photos are only accessible to the participants

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Firebase](https://firebase.google.com) for the backend services
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR code generation 