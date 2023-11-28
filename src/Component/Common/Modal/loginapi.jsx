// // // import React, { useState } from "react";
// // // import axios from "axios";

// import { useState } from "react";

// // // const TestData = () => {
// // //   const [data, setData] = useState([]);

// // //   const handleClick = () => {
// // //     axios.get("http://127.0.0.1:5000/info")
// // //       .then(response => {
// // //         setData(response.data);
// // //       })
// // //       .catch(error => {
// // //         console.log(error);
// // //       });
// // //   };

// // //   return (
// // //     <div>
// // //       <button onClick={handleClick}>Get Data</button>
// // //       <p>{data}</p>
// // //     </div>
// // //   );
// // // };

// // // export default TestData;

// // import React, { useState } from "react";

// // const TestData = () => {
// //   const [data, setData] = useState([]);
// //   const handleClick = () => {
// //     fetch("http://127.0.0.1:5000/info",{mode: "no-cors"})
// //       .then(response => response.json())
// //       .then(data => setData(data));
// //   };
// //   return (
// //     <div>
// //       <button onClick={handleClick}>Get Data</button>
// //       <p>{data}</p>
// //     </div>
// //   );
// // };

// // export default TestData;

// const TestData = () => {
//     const [data, setData] = useState([]);
//     const handleClick = () => {
//       fetch("http://127.0.0.1:5000/info", { mode: "no-cors" })
//         .then((response) => {
//           if (response.ok) {
//             return response;
//           } else {
//             throw new Error("Unable to fetch data");
//           }
//         })
//         .then((data) => setData(data))
//         .catch((error) => {
//           console.error(error);
//         });
//     };
  
//     return (
//       <div>
//         <button onClick={handleClick}>Get Data</button>
//         <p>{data}</p>
//       </div>
//     );
//   };
  
//   export default TestData;