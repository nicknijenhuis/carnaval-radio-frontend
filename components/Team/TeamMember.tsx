"use client";
import Image from "next/image";
import Link from "next/link";
import HTMLReactParser from "html-react-parser";
import { useState } from "react";
import { TeamMember } from "@/types/teamTypes";
import { FaEnvelope, FaPhone } from "react-icons/fa";

interface Props {
  data: TeamMember;
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
      {data.attributes.Photo.data?.attributes ? (
        <Image
          id={generateTeamId(data.attributes.Slug)}
          width="0"
          height="0"
          src={data.attributes.Photo.data?.attributes.url}
          alt={data.attributes.Name}
          sizes="404px"
          priority
          className="object-cover w-full h-full rounded-full"
          blurDataURL={data.attributes.Photo.data?.attributes.url}
        />
      ) : (
        <div
          id={generateTeamId(data.attributes.Slug)}
          className="relative inline-flex items-center justify-center w-4/6 h-4/6 overflow-hidden bg-[#827CB1] rounded-full"
        >
          <span className="text-gray-900 text-7xl font-semibold ease-linear tracking-widest	">
            {getInitials(data.attributes.Name)}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="lg:pb-[60px] pb-[45px] team-member">
      {showDetailedInformation ? (
        <Link href={`team#${data.attributes.Slug}`}>{teamMemberImage}</Link>
      ) : (
        <>{teamMemberImage}</>
      )}
      <div className="w-full bg-dark-purple font-semibold ease-linear duration-300 items-center justify-between p-3 mt-6 rounded-full pr-2 pl-8 normal-case h-auto inline-flex gap-5 2xl:text-[30px] text-lg text-white">
        {showDetailedInformation ? (
          <Link href={`team#${data.attributes.Slug}`}>
            {data.attributes.Name}
          </Link>
        ) : (
          data.attributes.Name
        )}
        <div className="flex gap-x-3">
          <a
            href={`tel:${data.attributes.Phone}`}
            className="block p-3 bg-white rounded-full"
          >
            <FaPhone
              color="#2C2E80"
              width="20"
              height="20"
            />
          </a>
          <a
            href={`mailto:${data.attributes.Email}`}
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
            email={data.attributes.Email}
            phone={data.attributes.Phone}
          />
          <div
            className="mt-5 text-lg team-desc"
            data-id={data.attributes.Slug.slice(
              data.attributes.Slug.indexOf("#") + 1
            )}
          >

            <div
              className="mt-5 text-lg team-desc"
              data-id={data.attributes.Slug.slice(
                data.attributes.Slug.indexOf("#") + 1
              )}
            >
              {JSON.stringify(data.attributes.Story)}
            </div>
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
}

const ContactTable = ({
  email,
  phone,
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
        </div>
      </div>
    </>
  );
};
