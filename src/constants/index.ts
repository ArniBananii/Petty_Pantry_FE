export const BASE_BACKEND_URL = import.meta.env.VITE_BACKEND_BASE_URL;
export const USERS_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_USERS
);
export const UNIQUE_INGREDIENTS_USER_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_UNIQUE_INGREDIENTS_USER_ENDPOINT
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
export const INGREDIENT_ENDPOINT = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_INGREDIENT
);
export const DELETE_UNIQUE_INGR_TEST = `${BASE_BACKEND_URL}`.concat(
  import.meta.env.VITE_ENDPOINT_DELETETEST
);
