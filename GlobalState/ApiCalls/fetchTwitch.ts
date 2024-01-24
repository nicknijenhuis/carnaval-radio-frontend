import fs from 'fs';

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

    const filePath = 'public/showTwitch.json';
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    const showTwitch = jsonData.showTwitch;

    return showTwitch;
  } catch (error) {
    console.error(error);
    return false;
  }
}

