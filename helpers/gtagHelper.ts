export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (window?.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
