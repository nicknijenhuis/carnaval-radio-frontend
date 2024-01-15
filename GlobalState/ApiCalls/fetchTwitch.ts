
export async function fetchTwitch(): Promise<boolean> {
  try {
    if (process.env.FORCE_SHOW_TWITCH === "true") {
      return true;
    }

    if (process.env.FORCE_DISABLE_TWITCH === "true") {
      return false;
    }
    
    if (!process.env.TWITCH_URL) {
      return false;
    }

    const response = await fetch(
      process.env.TWITCH_URL + "?no-reload=true",
      { next: { revalidate: 60 } }
    );
    
    const body = await response.text();

    if (body?.match(/isLiveBroadcast.{0,5}true/)) { 
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

