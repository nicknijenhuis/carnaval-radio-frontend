"use client";

const HeroTwitch = () => {
    return (
      <>
        <div style={{minHeight: '19rem'}} className="rounded-xl min-w-[30vw] min-h-16 shadow-lg md:ml-5 bg-gradient-to-r from-yellow-500 to-orange-500 pb-4 xl:pb-0 xl:pt-4">
          <iframe src="/twitch.html" className="w-full h-full" />
        </div>
     </>
    );
  };

export default HeroTwitch;