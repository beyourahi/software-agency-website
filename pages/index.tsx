import type { NextPage } from "next";

import { HomePageProps } from "../types";

import { Aboutus } from "@/components/aboutus";
import { Masthead } from "@/components/masthead";
import { Skills } from "@/components/skills";
import { Trustedby } from "@/components/trustedby";
import { Works } from "@/components/works";
import { Layout } from "@/components/layout";
import { Testimonials } from "@/components/testimonials";

const Home: NextPage<HomePageProps> = ({ members, works, brands, reviews }) => (
  <Layout>
    <Masthead />
    <Aboutus members={members} />
    <Skills />
    <Works works={works} />
    <Trustedby brands={brands} />
    <Testimonials reviews={reviews} />
  </Layout>
);

export default Home;

// Fetch Data
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const { members, works, brands, reviews } = await res.json();

  return {
    props: { members, works, brands, reviews },
  };
}
