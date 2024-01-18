const DateAndTime = ({ timestamp, date }: { timestamp?: number, date?: Date }) => {
  

  const currentDate = new Date();
  let formattedTimestamp = new Date();
  if(timestamp) {
    const CET_OFFSET = 6 * 3600; // 6 hours in seconds
    formattedTimestamp = new Date((timestamp - CET_OFFSET) * 1000);
  } else if(date) {
    formattedTimestamp = date;
    formattedTimestamp.setHours(formattedTimestamp.getHours() + 1);
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  const isToday =
    currentDate.getDate() === formattedTimestamp.getDate() &&
    currentDate.getMonth() === formattedTimestamp.getMonth() &&
    currentDate.getFullYear() === formattedTimestamp.getFullYear();

  if (isToday) {
    return (
      <>
        <span className="hidden md:inline-block lg:hidden xl:inline-block">
          Vandaag om
        </span>{" "}
        {formattedTimestamp.toLocaleTimeString("nl-NL", options)}
      </>
    ); // Today
  }

  const isYesterday =
    currentDate.getDate() - 1 === formattedTimestamp.getDate() &&
    currentDate.getMonth() === formattedTimestamp.getMonth() &&
    currentDate.getFullYear() === formattedTimestamp.getFullYear();

  if (isYesterday) {
    return (
      <>
        <span className="hidden md:inline-block">Gisteren om</span>{" "}
        {formattedTimestamp.toLocaleTimeString("nl-NL", options)}
      </>
    );
  }

  options.day = "numeric";
  options.month = "long"; // Display full month name (e.g., "september")

  return <>{formattedTimestamp.toLocaleTimeString("nl-NL", options)}</>;
};

export default DateAndTime;
