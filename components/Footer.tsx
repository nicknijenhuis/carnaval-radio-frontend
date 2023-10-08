import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { TbMinusVertical } from "react-icons/tb";
interface props {
  data: any;
  themeData: any;
}

const Footer = ({ data, themeData }: props) => {
  return (
    <footer className="pt-10 text-black">
      <div className="flex flex-col items-center md:flex-row py-10 md:px-10 gap-7">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={themeData.attributes.Logo.data.attributes.url}
              width={200}
              height={200}
              alt="Logo"
            />
          </Link>
          <Socials options="footer" />
        </div>

        <div className="flex flex-wrap items-start gap-14 sm:gap-16 md:gap-16 lg:gap-16 xl:gap-44 px-10">
          {data &&
            data.map((item: any, index: any) => (
              <div key={"footerMenu" + index}>
                <h2 className="font-bold mb-4">{item.title}</h2>
                <ul className="text-sm flex flex-col gap-1">
                  {item.items.map((item: any, index: any) => (
                    <li key={"footerItem" + index}>
                      <Link href={item.path}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row pt-8 pb-0 sm:pb-16 md:pb-10 lg:pb-8 xl:pb-8 items-center justify-between px-10 gap-2">
        <p className=" text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg">
          2023 Copyright Carnaval-Radio. Alle rechten voorbehouden.
        </p>
        <ul className="flex gap-2 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg">
          <li>
            <Link href="/privacy-beleid">Privacy beleid</Link>
          </li>
          <li>
            <Link href="/privacy-beleid" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Algemene voorwaarden</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy-beleid" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Cookies</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
