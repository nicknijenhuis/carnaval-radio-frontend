import { fetchTwitch } from "@/GlobalState/ApiCalls/fetchTwitch";
import HeroSlider from "./HeroSlider";
import HeroTwitch from "./HeroTwitch";
import { Slide } from "@/types/slideTypes";

const HeroTwitchOrSlider = async ({slides} : {slides:  Slide[]}) => {
    const showTwitch = await fetchTwitch();

    if (showTwitch){
        return <HeroTwitch />
    }

    return <HeroSlider slides={slides} />
}

export default HeroTwitchOrSlider;