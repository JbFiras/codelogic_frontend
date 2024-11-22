import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
    console.error("NEXT_PUBLIC_API_URL is not defined in the environment variables");
}

// Create axios instance with default configs
export const api = axios.create({
    baseURL: baseURL,
    withCredentials: true, // Ensure cookies are sent with requests
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor to include the CSRF token in every request
api.interceptors.request.use(
    (config) => {
        // Extract the CSRF token from cookies
        const csrfToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("csrf_token="))
            ?.split("=")[1];

        if (csrfToken) {
            config.headers["X-CSRF-Token"] = csrfToken; // Attach the CSRF token to the header
        } else {
            console.warn("CSRF token not found in cookies");
        }

        return config;
    },
    (error) => {
        return Promise.reject(error); // Handle errors
    }
);

export default api;
