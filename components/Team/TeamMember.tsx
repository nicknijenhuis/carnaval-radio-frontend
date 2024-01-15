import Image from "next/image";
import Link from "next/link";

import HTMLReactParser from "html-react-parser";
import { useState } from "react";
import { Team } from "@/types/teamTypes";
import { FaEnvelope, FaPhone } from "react-icons/fa";

interface Props {
  data: Team;
  showDetailedInformation?: boolean;
}

function getInitials(fullName: string) {
  const [firstName, ...restNames] = fullName.toUpperCase().trim().split(" ");

  if (!restNames.length) {
    return firstName.substring(0, 2);
  }

  const firstNameInitial = firstName[0];
  const lastNameInitial = restNames.pop()?.[0];

  return `${firstNameInitial}${lastNameInitial}`;
}

const TeamMember = ({ data, showDetailedInformation = false }: Props) => {
  const teamMemberImage = (
    <div className="member-wrapper h-auto aspect-square flex items-center justify-center p-2 w-full max-h-[405px] relative max-w-[405px] overflow-hidden mx-auto">
      {data.attributes.img.data?.attributes ? (
        <Image
          id={generateTeamId(data.attributes.url)}
          width="0"
          height="0"
          src={data.attributes.img.data?.attributes.url}
          alt={data.attributes.name}
          sizes="404px"
          priority
          className="object-cover w-full h-full rounded-full"
          blurDataURL={data.attributes.img.data?.attributes.url}
        />
      ) : (
        <div
          id={generateTeamId(data.attributes.url)}
          className="relative inline-flex items-center justify-center w-4/6 h-4/6 overflow-hidden bg-[#827CB1] rounded-full"
        >
          <span className="text-gray-900 text-7xl font-semibold ease-linear tracking-widest	">
            {getInitials(data.attributes.name)}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="lg:pb-[60px] pb-[45px] team-member">
      {showDetailedInformation ? (
        <Link href={`team#${data.attributes.url}`}>{teamMemberImage}</Link>
      ) : (
        <>{teamMemberImage}</>
      )}
      <div className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case h-auto inline-flex gap-5 2xl:text-[30px] text-lg text-white">
        {showDetailedInformation ? (
          <Link href={`team#${data.attributes.url}`}>
            {data.attributes.name}
          </Link>
        ) : (
          data.attributes.name
        )}
        <div className="flex gap-x-3">
          <a
            href={`tel:${data.attributes.phone}`}
            className="block p-3 bg-white rounded-full"
          >
            <FaPhone
              color="#2C2E80"
              width="20"
              height="20"
            />
          </a>
          <a
            href={`mailto:${data.attributes.email}`}
            className="block p-3 bg-white rounded-full"
          >
            <FaEnvelope
              color="#2C2E80"
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
      {!showDetailedInformation && (
        <>
          <ContactTable
            email={data.attributes.email}
            phone={data.attributes.phone}
            bigRegistrationNumber={data.attributes.bigRegistrationNumber}
          />
          <div
            className="mt-5 text-lg team-desc"
            data-id={data.attributes.url.slice(
              data.attributes.url.indexOf("#") + 1
            )}
          >
            {HTMLReactParser(data.attributes.desc)}
          </div>
        </>
      )}
    </div>
  );

  function generateTeamId(url: string): string | undefined {
    return url.slice(url.indexOf("#") + 1);
  }
};

export default TeamMember;

interface ContactTableProps {
  email?: string;
  phone?: string;
  bigRegistrationNumber?: string;
}

const ContactTable = ({
  email,
  phone,
  bigRegistrationNumber,
}: ContactTableProps) => {
  const [showTable, setShowTable] = useState(false);

  if (!showTable) {
    return (
      <button
        className="mt-2 text-blue-500 hover:underline cursor-pointer text-sm text-center w-full"
        onClick={() => setShowTable(true)}
      >
        Contact info weergeven
      </button>
    );
  }

  return (
    <>
      <button
        className="mt-2 text-blue-500 hover:underline cursor-pointer text-sm text-center w-full"
        onClick={() => setShowTable(false)}
      >
        Contact info verbergen
      </button>
      <div className="mt-5 p-2 break-words rounded-lg bg-zinc-100">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-2 text-lg">
          {email && (
            <>
              <div>E-mail:</div>
              <div className="col-span-2 lg:col-span-3">
                <a
                  href={`mailto:${email}`}
                  className="text-blue-500 hover:underline"
                >
                  {email}
                </a>
              </div>
            </>
          )}
          {phone && (
            <>
              <div>Tel:</div>
              <div className="col-span-2 lg:col-span-3">
                <a
                  href={`tel:${phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {phone}
                </a>
              </div>
            </>
          )}
          {bigRegistrationNumber && (
            <>
              <div>BIG nr.:</div>
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                {bigRegistrationNumber}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
