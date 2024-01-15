
export async function fetchTwitch(): Promise<boolean> {
  try {
    if(process.env.FORCE_SHOW_TWITCH === "true") {
      return true;
    }
    
    if (!process.env.TWITCH_URL) {
      return false;
    }

    const response = await fetch(
      process.env.TWITCH_URL + "?no-reload=true",
      { next: { revalidate: 60 } }
    );
    
    const body = await response.text();

    // This checks the HTML response from twitch to contain the string "isLiveBroadcast":true. 
    // If a stream is not live this is not there.
    if (body?.includes("isLiveBroadcast=\"true")) { 
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

