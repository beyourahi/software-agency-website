import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <Head>
      <title>Margelo | Homepage</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    {children}
  </div>
)
