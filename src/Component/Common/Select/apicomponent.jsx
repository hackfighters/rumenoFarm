import React from "react";
import axios from "axios";

const LoginApi = ({ username, password }) => {
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("username:", username);
    console.log("password:", password);

    try {
      const response = await axios.post(
        "https://3c5b-2401-4900-1ca3-6c2b-2127-a0aa-b62c-fe8e.ngrok.io/rumeno_login",
        {
          username: "himanshu",
          password: "12345678",
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

//   return (
//     <div>
//       {/* Content for the API functionality component */}
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
};

export default LoginApi;