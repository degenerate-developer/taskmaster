export const LOCAL_URL = "http://localhost:3000";
export const PROD_URL = "https://www.uncommonapp.app";

export const APP_URL =
  process.env.NODE_ENV === "development" ? LOCAL_URL : PROD_URL;

// uploadthing hosted urls
// no public cdn since we are not made of money

export const WAVE_VIDEO_URL =
  "https://xaq0c80u7p.ufs.sh/f/4yVhOQmWtUDzcVy5YmXfZXSu3EHtk4enLwY9poQIjiGMB76z";
export const POTION_VIDEO_URL =
  "https://xaq0c80u7p.ufs.sh/f/4yVhOQmWtUDz1RGXs1iCKlI0OegyJfuSN86EzbxGY2LjcXkp";
