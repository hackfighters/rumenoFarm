//   import React, { useEffect } from 'react';

// const TranslateButton = () => {
//   useEffect(() => {
//     const googleTranslateScript = document.createElement('script');
//     googleTranslateScript.type = 'text/javascript';
//     googleTranslateScript.async = true;
//     googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     googleTranslateScript.onerror = () => {
//       console.error('Failed to load Google Translate script');
//       // Optionally, you can provide more detailed error handling or fallback behavior here
//     };
//     document.body.appendChild(googleTranslateScript);

//     window.googleTranslateElementInit = function() {
//       new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
//     };

//     return () => {
//       document.body.removeChild(googleTranslateScript);
//       delete window.googleTranslateElementInit; // Clean up the global function
//     };
//   }, []);

//   return (
//     <div>
//       <div className='custom-select w-100 border rounded p-2' id="google_translate_element"></div>
//     </div>
//   );
// };

// export default TranslateButton;



// // import React from 'react'

// // const TranslateButton = () => {
// //   return ( 
// //     <> 
// //     <div id='google_element'></div>
// //     <script src='https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate'></script>
// //     <script>
// //       function loadGoogleTranslate() {
// //         new window.google.translate.TranslateElement("google_element")
// //       }
// //     </script>
// //     </>
// //   )
// // }

// // export default TranslateButton

// import React, { useEffect } from 'react';

// const TranslateButton = () => {
//   useEffect(() => {
//     const loadGoogleTranslate = () => {
//       new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
//     };

//     let script;

//     // Check if Google Translate script has been loaded
//     if (typeof window.google === 'undefined') {
//       script = document.createElement('script');
//       script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       script.async = true;
//       document.body.appendChild(script);
//     } else {
//       // If Google Translate script is already loaded, directly call the function
//       setTimeout(loadGoogleTranslate, 0); // Delay the initialization by 100 milliseconds
//     }

//     // Clean up function to remove the script when component unmounts
//     return () => {
//       if (script) {
//         document.body.removeChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div id='google_element'></div>
//   );
// };

// export default TranslateButton; 






// import React, { useEffect } from 'react';

// const TranslateButton = () => {
//  useEffect(() => {
//     // Define the googleTranslateElementInit function before loading the script
//     window.googleTranslateElementInit = function() {
//       // eslint-disable-next-line
//       new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//     };

//     function loadGoogleTranslateScript() {
//       const googleTranslateScript = document.createElement('script');
//       googleTranslateScript.type = 'text/javascript';
//       googleTranslateScript.async = true;
//       googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       googleTranslateScript.onerror = () => {
//         console.error('Failed to load Google Translate script');
//       };
//       document.body.appendChild(googleTranslateScript);
//     }

//     // Check if the script is already loaded
//     if (!window.google || !window.google.translate) {
//       loadGoogleTranslateScript();
//     } else {
//       // If the script is already in the window, we can call the init function directly
//       window.googleTranslateElementInit();
//     }

//     return () => {
//       // Cleanup the translate widget
//       const el = document.querySelector('.goog-te-banner-frame');
//       if (el) el.remove();
//     };
//  }, []);

//  return (
//     <div>
//       <div className='custom-select w-100 border rounded p-2' id="google_translate_element"></div>
//     </div>
//  );
// };

// export default TranslateButton;

// import React, { useEffect } from 'react';

// const TranslateButton = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
//     // script.async = true;
//     script.onload = () => {
//       // Google Translate API is loaded, now you can use it
//       if (window.google.translate.TranslateElement) {
//         new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
//       } else {
//         console.error('Google Translate API is not available.');
//       }
//     };
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup
//       document.body.removeChild(script);
//     };
//   }, []);

//   return <div id='google_element'></div>;
// };

// export default TranslateButton;


//  -->

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//  <meta charset="UTF-8">
//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
//  <title>Document</title>
// </head>
// <body>
//  <div id='google_element'>
//  </div>
// </body>
//  <script src='https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate'></script>
//  <script>
// export default function TranslateButton() {
//      new window.google.translate.TranslateElement("google_element")
//    }
//  </script>
// </html> 


import React, { useEffect } from 'react';

function TranslateButton() {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en'
      }, 'google_translate_element');
    }

    const addScript = document.createElement('script');
    addScript.setAttribute('src','//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');                
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
}
export default TranslateButton;

