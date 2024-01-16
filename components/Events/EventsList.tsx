import React, { Fragment } from "react";
import { MdEvent } from "react-icons/md";
import { Event } from "@/GlobalState/ApiCalls/fetchEvents";
import FormatTitle from "../FormatTitle";
import DateAndTime from "../DateAndTime";

type EventsProps = {
  events: Event[];
  loading?: boolean;
};

const EventsList: React.FC<EventsProps> = ({ events, loading = null }) => {
  return (
    <div>
      {!loading ? (
        <>
          {events?.map((event: Event, i: any) => (
            <Fragment key={"frag" + i}>
              <div className="grid grid-cols-12 gap-2 max-w-3xl py-2">
                <div className="col-span-3 flex items-center">
                  <MdEvent
                    size={24}
                    className="mr-2 hidden sm:inline-block md:inline-block lg:hidden xl:inline-block"
                  />
                  <div
                    className={`py-2 px-4 rounded-full ${
                      i % 2 !== 0 ? "bg-tertiaryShade_1" : "bg-secondayShade_1"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        i % 2 !== 0 ? "text-tertiary" : "text-secondary"
                      }`}
                    >
                      <DateAndTime timestamp={Date.parse(event.Date) / 1000} />
                    </p>
                  </div>
                </div>

                <div className="col-span-5">
                  <FormatTitle text={event.Title} />
                </div>
                <div className="col-span-4 text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  <FormatTitle text={event.Address} />
                </div>
              </div>
                <div className="w-full h-[1px] bg-gray-100"></div>
            </Fragment>
          ))}
        </>
      ) : (
        <EventsLoading />
      )}
    </div>
  );
};

const EventsLoading = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      {arr.map((_, i) => (
        <div key={"recentSongLoading" + i} className="flex flex-col">
          <div className="flex items-center justify-between p-2 bg-gray-200 animate-pulse">
            <div className="flex space-x-3">
              <div className="h-9 w-9 rounded-full bg-gray-100"></div>
              <div className="flex flex-col gap-1">
                <div className="h-7 w-[200px] bg-gray-100 rounded-md"></div>
                <div className="h-4 w-24 bg-gray-100 rounded-md"></div>
              </div>
            </div>
            <div className={`py-4 px-8 rounded-full bg-greenShade_1`}></div>
          </div>
          <div className="w-full h-[1px] bg-gray-200"></div>
        </div>
      ))}
    </>
  );
};

export default EventsList;
