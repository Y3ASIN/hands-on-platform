// import Cookies from "js-cookie";
// import { VITE_API_URI } from "../../config/env";

// const url = `${VITE_API_URI}/api/v1`;

// export const singUp = async (userData) => {
//   try {
//     console.log("Sending signup request with data:", userData);
    
//     const response = await fetch(`${url}/auth/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
    
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Signup failed:", response.status, errorText);
//       throw new Error(`Failed to sign up: ${response.status} ${errorText}`);
//     }

//     const data = await response.json();
//     console.log("Signup response:", data);

//     if (data.token) {
//       console.log("Token received, storing in localStorage");
//       Cookies.set("token", data.token);
//     } else {
//       console.warn("No token received in signup response");
//     }
    
//     return data;
//   } catch (error) {
//     console.error("Error in signup process:", error);
//     throw error;
//   }
// };

// export const login = async (credentials) => {
//   try {
//     const response = await fetch(`${url}/auth/signin`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(credentials),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to login");
//     }

//     const data = await response.json();
//     console.log(data);
//     console.log("Token stored in localStorage", data.token);

//     // Check if token exists in the response and store it
//     if (data.token) {
//       localStorage.setItem("token", data.token);
//       console.log("Token stored in localStorage");
//     } else {
//       throw new Error("No authentication token received");
//     }
//     return data;
//   } catch (error) {
//     console.log("Error in login", error);
//   }
// };

// export const fetchUser = async (id) => {
//   const response = await fetch(`${url}/users/:${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch user");
//   }
//   return response.json();
// };
