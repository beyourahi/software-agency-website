import type { NextPage } from "next";

import { HomePageProps } from "../types";

import { Aboutus } from "@/components/aboutus";
import { Masthead } from "@/components/masthead";
import { Review } from "@/components/review";
import { Skills } from "@/components/skills";
import { Trustedby } from "@/components/trustedby";
import { Works } from "@/components/works";
import { Layout } from "@/components/layout";

const Home: NextPage<HomePageProps> = ({ members, works, brands }) => (
  <Layout>
    <Masthead />
    <Aboutus members={members} />
    <Skills />
    <Works works={works} />
    <Trustedby brands={brands} />
    <Review />
  </Layout>
);

export default Home;

// Fetch Data
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const { members, works, brands } = await res.json();

  return {
    props: { members, works, brands },
  };
}
