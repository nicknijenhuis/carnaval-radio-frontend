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
      { text: "Mobiele apps", src: "page/mobiele-apps" },
      { text: "Nu luisteren", src: "/page" },
      {
        text: "Programma live-uitzendingen",
        src: "page/live-uitzendingen",
      },
      { text: "Recente nummers", src: "page/recentenummers" },
      { text: "Verzoekjes", src: "page/verzoekjes" },
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
      { text: "Help", src: "page/help" },
      { text: "Links", src: "page/links" },
      { text: "Privacy beleid", src: "page/privacy-beleid" },
    ],
  },
  {
    text: "Contact",
    src: "page/contact",
    icon: <MdPhoneEnabled />,
    className: "border-b",
  },
];
