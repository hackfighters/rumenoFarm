import React, { useState, useEffect } from 'react';

const AddToHomeScreenButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  const handleAddToHomeScreen = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <button id="addToHomeScreenBtn" onClick={handleAddToHomeScreen}>
      Add to Home Screen
    </button>
  );
};

export default AddToHomeScreenButton;