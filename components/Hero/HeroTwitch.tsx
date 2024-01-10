import Script from "next/script";
import { FaTwitch } from "react-icons/fa";

const HeroTwitch = () => {
    return (
      <>
        <div className="rounded-xl min-w-[30vw] min-h-16 shadow-lg md:ml-5 bg-gradient-to-r from-yellow-500 to-orange-500 pb-4 xl:pb-0 xl:pt-4">
          <div className='sk-ww-twitch-live-videos' data-embed-id='2534506'>
            <div className="flex items-center justify-center h-full text-white mt-4"><FaTwitch className="h-10 w-10 animate-spin" /></div>
          </div>
        </div>
        <Script src="https://widgets.sociablekit.com/twitch-live-videos/widget.js" strategy="afterInteractive" />
      </>
    );
  };

export default HeroTwitch;