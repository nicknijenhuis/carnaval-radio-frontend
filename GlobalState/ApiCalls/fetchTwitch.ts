export async function fetchTwitch(): Promise<boolean> {
  try {
    if (process.env.FORCE_SHOW_TWITCH === "true") {
      console.info('FORCE_SHOW_TWITCH');
      return true;
    }

    if (process.env.FORCE_DISABLE_TWITCH === "true") {
      console.warn('FORCE_DISABLE_TWITCH');
      return false;
    }
    
    if (!process.env.TWITCH_URL) {
      console.warn('TWITCH_URL not set');
      return false;
    }

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + 'api/feature-toggle', { next: { tags: ["twitch"] } });
    const data = await response.json();
    console.warn('showTwitch:Data:', data);
    console.warn('showTwitch:', data?.attributes?.ShowTwitch);
    return data?.attributes?.ShowTwitch ?? false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

