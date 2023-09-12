import Link from "next/link";

const page = async () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-primary">Contact</h2>
      <h3 className="my-2 text-lg font-semibold">Algemeen</h3>
      <ul className="ml-8" style={{ listStyleType: "disc" }}>
        <li className="">
          <Link
            className="hover:underline text-green"
            href="mailto:info@carnaval-radio.nl"
            target="_blank"
          >
            info@carnaval-radio.nl
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline text-green"
            href="mailto:info@carnaval-radio.nl"
            target="_blank"
          >
            info@carnaval-radio.nl
          </Link>
        </li>
      </ul>

      <h3 className="my-2 text-lg font-semibold">Voorzitter</h3>
      <ul className="ml-8" style={{ listStyleType: "disc" }}>
        <li className="">
          <Link
            className="hover:underline text-green"
            href="mailto:jeroen.vreuls@carnaval-radio.nl"
            target="_blank"
          >
            jeroen.vreuls@carnaval-radio.nl
          </Link>
        </li>
      </ul>

      <h3 className="my-2 text-lg font-semibold">Sponsoring</h3>
      <ul className="ml-8" style={{ listStyleType: "disc" }}>
        <li className="">
          <Link
            className="hover:underline text-green"
            href="mailto:davy.heuts@carnaval-radio.nl"
            target="_blank"
          >
            davy.heuts@carnaval-radio.nl
          </Link>
        </li>
      </ul>

      <h3 className="my-2 text-lg font-semibold">Muziek opsturen</h3>
      <ul className="ml-8" style={{ listStyleType: "disc" }}>
        <li className="">
          <Link
            className="hover:underline text-green"
            href="mailto:muziek@carnaval-radio.nl"
            target="_blank"
          >
            muziek@carnaval-radio.nl
          </Link>
        </li>
      </ul>

      <h3 className="my-2 text-lg font-semibold">
        Website & andere digitale zaken (Webmaster)
      </h3>
      <ul className="ml-8" style={{ listStyleType: "disc" }}>
        <li className="">
          <Link
            className="hover:underline text-green"
            href="mailto:nick.nijenhuis@carnaval-radio.nl"
            target="_blank"
          >
            nick.nijenhuis@carnaval-radio.nl
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
