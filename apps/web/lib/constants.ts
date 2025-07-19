export const LOCAL_URL = "http://localhost:3000";
export const PROD_URL = "https://taskmaster-dd.vercel.app";

export const APP_URL =
  process.env.NODE_ENV === "development" ? LOCAL_URL : PROD_URL;
