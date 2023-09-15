"use client";
import { useEffect } from "react";
import { RootState } from "@/GlobalState/store";
import { useSelector } from "react-redux";
import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsors/Sponsors";
import PostCard from "@/components/Post/PostCard";

export default function Home() {
  useEffect(() => {
    document.title = `Carnaval Radio | 24/7 Vasteloavend Muzieek`;
  }, []);
  return (
    <section className="flex-grow">
      <Hero />
      <Sponsors />
      <PostCard />
    </section>
  );
}
