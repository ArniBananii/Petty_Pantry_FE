/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_BASE_URL: string;
  readonly VITE_ENDPOINT_USERS: string;
  readonly VITE_ENDPOINT_INGREDIENTS: string;
  readonly VITE_ENDPOINT_UNQINGUSER: string;
  readonly VITE_FRONTEND_BASE_URL: string;
  readonly VITE_ENDPOINT_POSTUNQING: string;
  readonly VITE_ENDPOINT_DELETEUNQING: string;
  readonly VITE_ENDPOINT_PANTRY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
