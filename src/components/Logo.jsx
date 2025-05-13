// src/components/Logo.jsx
import React from 'react';

const Logo = () => (
  <div className="logo-container">
    {/* this empty div renders the animated glow */}
    <div className="logo-glow-effect" />
    {/* this img sits on top */}
    <img
      src="https://firebasestorage.googleapis.com/v0/b/pixpair.firebasestorage.app/o/crab5.svg?alt=media&token=93592dde-03d2-4140-bf36-c4cb0ca39f85"
      alt="PixCrab logo"
      className="logo-image"
    />
  </div>
);

export default Logo;
