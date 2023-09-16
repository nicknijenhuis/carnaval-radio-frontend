import HeroSlider from "./HeroSlider";
import HeroSongs from "./HeroSongs";

const Hero = () => {
  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 min-h-fit py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-[#f9f9f9] overflow-hidden">
      <HeroSlider />
      <HeroSongs />
    </section>
  );
};

export default Hero;
