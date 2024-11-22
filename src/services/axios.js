import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
    console.error("NEXT_PUBLIC_API_URL is not defined in the environment variables");
}

// Create axios instance with default configs
export const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
