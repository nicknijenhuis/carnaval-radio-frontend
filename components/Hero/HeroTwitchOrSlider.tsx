"use client";
import { useState, useEffect } from "react";
import HeroSlider from "./HeroSlider";
import HeroTwitch from "./HeroTwitch";

const HeroTwitchOrSlider = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [showTwitch, setShowTwitch] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            const twitchHtml = document.querySelector(".sk-ww-twitch-live-videos")?.innerHTML;
            if (twitchHtml && twitchHtml.includes("CarnavalRadio (We gebruiken op dit moment geen video)")) {
                setShowSlider(true);
                setShowTwitch(false);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showTwitch && <HeroTwitch />}
            <div className={`${showSlider ? "block" : "md:hidden"}`}>
                <HeroSlider />
            </div>
        </>
    );
}

export default HeroTwitchOrSlider;