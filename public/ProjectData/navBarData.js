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
      { text: "Mobile Apps", src: "/mobileapps" },
      { text: "Nu luisteren", src: "/luisteren" },
    ],
  },
  {
    text: "Sponsoren",
    src: "/sponsors",
    icon: <MdBusiness />,
  },
  {
    text: "Over ons",
    src: "pages/over-ons",
    icon: <MdError />,
  },
  {
    text: "Gastenboek",
    src: "/",
    icon: <MdAssignmentInd />,
  },
  {
    text: "Overig",
    icon: <MdApi />,
    subMenu: [
      { text: "Help", src: "/help" },
      { text: "Links", src: "/links" },
    ],
  },
  {
    text: "Contact",
    src: "/pages/contact",
    icon: <MdPhoneEnabled />,
    className: "border-b",
  },
];
