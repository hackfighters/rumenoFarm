// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const Test = (items) => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   const handleSubmit = async () => {
// //     try {
// //       const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
// //        items
// //       });
// //       console.log(response);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Enter your name"
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="email"
// //         placeholder="Enter your email"
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <button onClick={handleSubmit}>Submit</button>
// //     </div>
// //   );
// // };

// // export default Test;

// import React, { useState } from "react";
// import axios from "axios";

// const Test = ({item, setCart}) => {
//   const [response, setResponse] = useState("");

//   const handleSubmit = async () => {
//     console.log(item)
//     try {
//       const response = await axios.post("https://api.example.com/send-message", {
//         message: "Hello",item
//       });
//       setResponse(response.data);
//     } catch (error) {
//       console.log(error);
//       console.log(item)
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSubmit}>Send Hello</button>
//       <p>Response: {response}</p>
//       <p>Response: {item}</p>

//     </div>
//   );
// };

// export default Test;