import { Aboutus } from "@/components/aboutus";
import { Masthead } from "@/components/masthead";
import { Skills } from "@/components/skills";
import { Trustedby } from "@/components/trustedby";
import { Works } from "@/components/works";
import type { NextPage } from "next";
import Head from "next/head";
import { Member, Work } from "../types";

interface Props {
  members: Member[];
  works: Work[];
  brands: string[];
}

const Home: NextPage<Props> = ({ members, works, brands }) => (
  <div>
    <Head>
      <title>Margelo | Homepage</title>
      <meta name="description" content="Generated by create next app" />
    </Head>

    <Masthead />
    <Aboutus members={members} />
    <Skills />
    <Works works={works} />
    <Trustedby brands={brands} />
  </div>
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
