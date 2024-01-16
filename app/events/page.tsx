import React from "react";
import { BsFileMusicFill } from "react-icons/bs";
import { Indie } from "../fonts/font";
import EventsList from "@/components/Events/EventsList";
import { fetchEvents } from "@/GlobalState/ApiCalls/fetchEvents";

const page = async () => {
  const events = await fetchEvents();

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <BsFileMusicFill className="text-2xl text-secondary" />
        <h2 className={`text-center text-2xl font-semibold ${Indie.className}`}>
          Evenementen
        </h2>
      </div>
      <EventsList events={events} />
    </div>
  );
};

export default page;
