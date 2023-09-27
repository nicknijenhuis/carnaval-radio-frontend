export const splitTitle = (title: string) => {
    const parts = title.split(" - ");
    let song;
    if (parts.length === 2) {
      song = {
        artist: parts[0],
        song: parts[1],
      };
    } else {
      song = {
        artist: "Unknown",
        song: title,
      };
    }

    if (song.artist === "Unknown") {
      song.artist = "Carnaval-Radio.nl";
    }

    if (song.song === "Unknown") {
      song.song = "Carnaval-Radio.nl";
    }

    return song;
  };