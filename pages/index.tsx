import { Aboutus } from '@/components/aboutus'
import { Masthead } from '@/components/masthead'
import { Skills } from '@/components/skills'
import { Trustedby } from '@/components/trustedby'
import { Works } from '@/components/works'
import { Brands } from '@/types/brands_types'
import { Members as MembersProps } from '@/types/member_types'
import { Works as WorksProps } from '@/types/work_types'
import type { NextPage } from 'next'
import Head from 'next/head'

interface Props {
  members: MembersProps
  works: WorksProps
  brands: Brands
}

const Home: NextPage<Props> = ({ members, works, brands }) => {
  console.log(members)
  console.log(works)

  return (
    <div>
      <Head>
        <title>Margelo | Homepage</title>
        <meta name="description" content="Generated by create next app" />
      </Head >

      <Masthead />
      <Aboutus members={members} />
      <Skills />
      <Works works={works} />
      <Trustedby brands={brands} />
    </div >
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/members")
  const res2 = await fetch("http://localhost:3000/api/works")
  const res3 = await fetch("http://localhost:3000/api/brands")

  const members = await res.json()
  const works = await res2.json()
  const brands = await res3.json()

  return {
    props: {
      members: members.members,
      works: works.works,
      brands: brands.brands
    }
  }
}

