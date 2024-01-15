"use client";

const HeroTwitch = () => {
    return (
      <>
        <div style={{minHeight: '19rem'}} className="rounded-xl min-w-[30vw] min-h-16 shadow-lg bg-gradient-to-r from-yellow-500 to-orange-500">
          <iframe src="/twitch.html" className="w-full h-full" />
        </div>
     </>
    );
  };

export default HeroTwitch;