export const BASE_BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export const USERS_ENDPOINT = `${BASE_BACKEND_URL}`.concat(import.meta.env.VITE_ENDPOINT_USERS);
export const UNQINGREDIENT_ENDPOINT = `${BASE_BACKEND_URL}`.concat(import.meta.env.VITE_ENDPOINT_UNQINGUSER);
export const INGREDIENTS_ENDPOINT = `${BASE_BACKEND_URL}`.concat(import.meta.env.VITE_ENDPOINT_INGREDIENTS);