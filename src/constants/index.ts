export const BASE_BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export const USERS_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_USERS
);
export const UNQINGREDIENT_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_UNQINGUSER
);
export const POST_UNQING_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_POSTUNQING
);
export const DELETE_UNQING_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_DELETEUNQING
);
export const INGREDIENTS_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_INGREDIENTS
);
export const SINGLE_USER_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_USER
);
export const USER_REGISTER_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_REGISTER
);
export const USER_PANTRY_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
    import.meta.env.VITE_ENDPOINT_PANTRY
);
