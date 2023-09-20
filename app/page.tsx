import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsors/Sponsors";
import PostCard from "@/components/Post/PostCard";

export default function Home() {
  return (
    <section className="flex-grow">
      <Hero />
      <Sponsors />
      <PostCard />
    </section>
  );
}
