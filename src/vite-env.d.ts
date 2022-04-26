/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CORS_HEROKU_CROSS_ORIGIN: string;
  readonly VITE_APP_META_WEATHER_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
