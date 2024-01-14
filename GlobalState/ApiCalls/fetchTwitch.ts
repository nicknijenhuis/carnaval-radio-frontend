
export async function fetchTwitch(): Promise<boolean> {
  try {
    const response = await fetch(
      process.env.TWITCH_URL + "?no-reload=true",
      { next: { revalidate: 10 } }
    );
    
    const body = await response.text();

      console.log(body);

    // This checks the HTML response from twitch to contain the string "isLiveBroadcast":true. 
    // If a stream is not live this is not there.
    if (body?.includes("isLiveBroadcast")) { 
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

