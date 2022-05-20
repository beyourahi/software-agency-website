import type { NextPage } from "next";

import { Member, Work } from "../types";

import { Aboutus } from "@/components/aboutus";
import { Masthead } from "@/components/masthead";
import { Review } from "@/components/review";
import { Skills } from "@/components/skills";
import { Trustedby } from "@/components/trustedby";
import { Works } from "@/components/works";
import { Layout } from "@/components/layout";

interface Props {
  members: Member[];
  works: Work[];
  brands: string[];
}

const Home: NextPage<Props> = ({ members, works, brands }) => (
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
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const { members, works, brands } = await res.json();

  return {
    props: { members, works, brands },
  };
}
