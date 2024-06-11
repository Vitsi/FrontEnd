import { register } from "module";

const registeredUsers: string[] = [];

interface FormData {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  role: string;
}

// Simulating authentication service
const AuthService = {
    login: (email: string, password: string) => {
    // Simulating API call to login user
    return new Promise<LoginResponse>((resolve, reject) => {
        setTimeout(() => {
          // Simulating successful login with roles
          if (email === "patient@example.com" && password === "password123") {
            resolve({ accessToken: "mock-access-token", role: "patient" });
          } else if (email === "clerk@example.com" && password === "password123") {
            resolve({ accessToken: "mock-access-token", role: "clerk" });
          } else if (email === "doctor@example.com" && password === "password123") {
            resolve({ accessToken: "mock-access-token", role: "doctor" });
          } else if (email === "hcp@example.com" && password === "password123") {
            resolve({ accessToken: "mock-access-token", role: "hcp" });
          } else if (email === "labTech@example.com" && password === "password123") {
            resolve({ accessToken: "mock-access-token", role: "labTech" });
          } else {
            reject(new Error("Incorrect email or password"));
          }
        }, 1000);
      });
    },
    registerPatients: (formData: FormData) => {
      // Simulating API call to register user
      return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
              // Simulating check if email already exists
                if (registeredUsers.includes(formData.email)) {
                    reject(new Error("Email already registered"));
                } else {
                    // Simulating successful registration
                    console.log("Registered Patient:", formData);
                    registeredUsers.push(formData.email); // Add email to list of registered users
                    resolve();
                }
          }, 1000);
      });
    },
    registerHospitals: (formData: FormData) => {
      // Simulating API call to register hospital
      return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
              // Simulating check if email already exists
              if (registeredUsers.includes(formData.email)) {
                  reject(new Error("Email already registered"));
              } else {
                  // Simulating successful registration
                  console.log("Registered hospital:", formData);
                  registeredUsers.push(formData.email); // Add email to list of registered users
                  resolve();
              }
          }, 1000);
      });
    },
    getUserProfile: () => {
    },
  };
 

  export default AuthService;

