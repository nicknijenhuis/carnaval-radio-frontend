import axios from "axios";

export interface Song {
  artist: string;
  title: string;
}

export interface RecentSong extends Song {
  date: number;
  url: string;
}

interface RadioTrackItem {
  title: string;
  link: string;
  description: string;
  date: number;
  enclosure: {
    url: string;
    type: string;
  };
};


export async function fetchSongs(): Promise<RecentSong[]> {
  try {
    const response = await axios.get(
      "https://ams1.reliastream.com/recentfeed/scarna00/json"
    );
    const modifiedTracks: RecentSong[] = response.data.items.map((item: RadioTrackItem) => {
      const song = splitTitle(item.title);
      const modifiedSong = enrichTitle(song);
      const modifiedCover = enrichCover(item.enclosure.url, song);

      return {
        ...modifiedSong,
        date: item.date,
        url: modifiedCover,
      };
    });

    return modifiedTracks;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function splitTitle(title: string) {
  const parts = title.split(" - ");
  let song;
  if (parts.length === 2) {
    song = {
      artist: parts[0],
      title: parts[1],
    };
  } else {
    song = {
      artist: "Unknown",
      title: title,
    };
  }

  return song;
}

const DefaultCarnavalRadio = "Carnaval-Radio.nl";

function enrichTitle(song: Song) {
  if (song.artist === "Unknown") {
    song.artist = DefaultCarnavalRadio;
  }

  if (song.title === "Unknown") {
    song.title = DefaultCarnavalRadio;
  }

  return song;
}

function enrichCover(coverUrl: string, song: Song) {
  if (song.artist !== DefaultCarnavalRadio) {
    // only enrich our own songs
    return coverUrl;
  }

  if (coverUrl === "https://ams1.reliastream.com/static/scarna00/covers/nocover.png") {
    coverUrl = "https://res.cloudinary.com/dwzn0q9wj/image/upload/c_scale,h_100,w_100/f_webp/logo_square_512_1_78657ec246.jpg";
  }
  return coverUrl;
}

