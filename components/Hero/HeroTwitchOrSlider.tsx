import { fetchTwitch } from "@/GlobalState/ApiCalls/fetchTwitch";
import HeroSlider from "./HeroSlider";
import HeroTwitch from "./HeroTwitch";

const HeroTwitchOrSlider = async () => {
    const showTwitch = await fetchTwitch();

    if (showTwitch){
        return <HeroTwitch />
    }

    return <HeroSlider />
}

export default HeroTwitchOrSlider;