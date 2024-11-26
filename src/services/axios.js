import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
    console.error("NEXT_PUBLIC_API_URL is not defined");
}

let csrfToken = null;

// Function to fetch CSRF token explicitly
export const fetchCsrfToken = async () => {
    try {
        const response = await axios.get(`${baseURL}/csrf-token`, {
            withCredentials: true,
        });
        csrfToken = response.data?.csrf_token;

        if (csrfToken) {
            api.defaults.headers.common["X-CSRF-Token"] = csrfToken;
        }
        return csrfToken;
    } catch (error) {
        // console.error("Error fetching CSRF token:", error);
        return null;
    }
};

// Function to create an Axios instance
export const createAxiosInstance = (signal) => {
    const axiosInstance = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
        signal, // Optional AbortController signal
    });

    // Request Interceptor
    axiosInstance.interceptors.request.use(
        (config) => {
            if (csrfToken) {
                config.headers["X-CSRF-Token"] = csrfToken;
            }
            // else {
            //     console.warn("CSRF token not found. Ensure to fetch it before API calls.");
            // }
            return config;
        },
        (error) => Promise.reject(error)
    );
    axiosInstance.interceptors.response.use(
        (response) => {
            const newToken = response.headers["x-csrf-token"];
            if (newToken) {
                csrfToken = newToken;
                axiosInstance.defaults.headers.common["X-CSRF-Token"] = newToken;
            }
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

// Default Axios instance
export const api = createAxiosInstance();

// // Initialize CSRF token during app startup
// (async () => {
//     await fetchCsrfToken();
// })();
