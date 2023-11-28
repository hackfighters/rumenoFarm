// import React from 'react';

// const Testapi = () => {
//   const handleButtonClick = () => {
//     const data = {
//       key1: 'value1',
//       key2: 'value2',
//       // Add other data as needed
//     };

//     fetch('http://127.0.0.1:5000/api/post_data', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(responseData => {
//         console.log(responseData);
//         // Handle the response data as needed
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         // Handle errors as needed
//       });
//   };

//   return (
//     <div>
//       <h1>React App</h1>
//       <button onClick={handleButtonClick}>Send POST Request</button>
//     </div>
//   );
// };

// export default Testapi;
