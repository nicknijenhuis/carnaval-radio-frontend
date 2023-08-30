import {
  MdHome,
  MdError,
  MdPhoneEnabled,
  MdApi,
  MdAssignmentInd,
  MdMusicNote,
  MdBusiness,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export const navBarData = [
  {
    text: "Home",
    src: "/",
    icon: <AiFillHome />,
  },
  {
    text: "Over ons",
    src: "/",
    icon: <MdError />,
  },
  {
    text: "Luisteren",
    src: "/",
    icon: <MdMusicNote />,
  },
  // {
  //   text: "Sponsoren",
  //   src: "/sponsors",
  //   icon: <MdBusiness />,
  // },
  {
    text: "Gastenboek",
    src: "/",
    icon: <MdAssignmentInd />,
  },
  {
    text: "Overig",
    src: "/",
    icon: <MdApi />,
  },
  {
    text: "Contact",
    src: "/pages/contact",
    icon: <MdPhoneEnabled />,
    className: "border-b",
  },
];
