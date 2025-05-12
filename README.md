# PixCrab

PixCrab is a real-time synchronized photo capture application. It allows multiple users to join a session and capture photos that are instantly shared with all participants.

## Live Demo

Visit the live application at: [https://blinkeado.github.io/pixpair/](https://blinkeado.github.io/pixpair/)

## Features

- User authentication (email/password, Google, or anonymous)
- Create or join photo capture sessions
- Real-time photo sharing
- Mobile-friendly interface

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

### Deploying to GitHub Pages

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/pixpair"
   ```

2. Use the deployment script:
   ```
   ./build-and-deploy.sh
   ```

## Firebase Configuration

This application uses Firebase for authentication, real-time database, and storage. The Firebase configuration is directly included in the `index.html` file.

## How to Use

1. Sign in with your preferred method (email, Google, or as a guest)
2. Create a new session or join an existing one with a session ID
3. Grant camera permissions when prompted
4. Take photos that will be automatically shared with all session participants

## Troubleshooting

If you encounter any issues:

1. Check that your Firebase configuration is correct
2. Ensure Firebase Authentication has your domain listed in the authorized domains
3. Verify that Firebase Storage and Database rules allow read/write access for authenticated users

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Developed by Carlos P Jara
