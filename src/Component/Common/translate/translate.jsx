

import React, { useEffect } from 'react';

function TranslateButton() {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en'
      }, 'google_translate_element');
    }

    const addScript = document.createElement('script');
    console.log(addScript);
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);


    window.googleTranslateElementInit = googleTranslateElementInit;

  }, []);


  return (
    <div id="google_translate_element"></div>
  );
}
export default TranslateButton;