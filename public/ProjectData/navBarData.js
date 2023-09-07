import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
} from "react-icons/md";

export const navBarData = [
  {
    text: "Home",
    src: "/",
    icon: <MdHome />,
  },
  {
    text: "Luisteren",
    icon: <MdMusicNote />,
    subMenu: [
      { text: "Mobiele apps", src: "/mobileapps" },
      { text: "Nu luisteren", src: "/luisteren" },
      { text: "Programma live-uitzendingen", src: "/liveUitzendingen" },
      { text: "Recente nummers", src: "/recentnumbers" },
      { text: "Verzoekjes", src: "/verzoekjes" },
    ],
  },
  {
    text: "Sponsoren",
    src: "/sponsors",
    icon: <MdBusiness />,
  },
  {
    text: "Over ons",
    src: "/over-ons",
    icon: <MdError />,
  },
  {
    text: "Gastenboek",
    src: "/gastenboek",
    icon: <MdAssignmentInd />,
  },
  {
    text: "Overig",
    icon: <MdApi />,
    subMenu: [
      { text: "Help", src: "/help" },
      { text: "Links", src: "/links" },
      { text: "Privacy beleid", src: "/privacypolicy" },
    ],
  },
  {
    text: "Contact",
    src: "/contact",
    icon: <MdPhoneEnabled />,
    className: "border-b",
  },
];
