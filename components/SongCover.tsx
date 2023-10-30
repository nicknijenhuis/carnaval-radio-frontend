import React from "react";
import Image from "next/image";

interface Props {
  url: string;
  artist: string;
  type?: string;
}

const cheerfulColors = [
  "#f5cf1d", // Yellow
  "#2cd27e", // Green
  "#3ae5e7", // Cyan
  "#570bb7", // Purple
  "#d042f8", // Lavender
  "#3aefb6", // Teal
  "#b8f331", // Lime
  "#fae534", // Lemon
  "#fb9605", // Tangerine
  "#fc3d11", // Tomato
  "#2cc2d8", // Sky Blue
  "#f534b3", // Magenta
  "#f5ed16", // Chartreuse
  "#fb8318", // Orange
  "#fca53e", // Amber
  "#fe0557", // Pink
  "#2bcaf8", // Light Blue
  "#fc123e", // Coral
  "#fddc23", // Gold
  "#21f0a9", // Mint
];

const getInitials = (artist: string) =>
  artist
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const getRandomColor = (artist: string) => {
  // Use a hash or any other logic to ensure different initials produce different colors
  const artistHash = artist
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = artistHash % (cheerfulColors.length - 1); // Use (length - 1) to avoid going out of bounds

  return cheerfulColors[colorIndex];
};

const SongCover = ({ url, artist, type = "hero" }: Props) => {
  const nocover =
    "https://ams1.reliastream.com/static/scarna00/covers/nocover.png";

  const isNocover = url === nocover;
  const initials = getInitials(artist);
  const backgroundColor = isNocover ? getRandomColor(artist) : "transparent";

  const commonClasses = `rounded-md ${
    type === "hero" ? "h-14 w-14" : "h-16 w-16"
  }`;

  return (
    <div
      style={{ backgroundColor }}
      className={`${commonClasses} flex items-center justify-center`}
    >
      {isNocover ? (
        <h3 className="text-xl font-semibold text-white">{initials}</h3>
      ) : (
        <Image
          src={url}
          alt={artist}
          height={100}
          width={100}
          className={commonClasses}
        />
      )}
    </div>
  );
};

export default SongCover;
