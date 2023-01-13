import Script from "next/script";

const NowPlaying = ({ className }: { className: string }) => {
  return (
    <>
      <Script src="https://ams1.reliastream.com/system/streaminfo.js" />
      <span
        className={`cc_streaminfo ${className}`}
        data-type="song"
        data-username="scarna00"
      >
        Laden ...
      </span>
    </>
  );
};

export default NowPlaying