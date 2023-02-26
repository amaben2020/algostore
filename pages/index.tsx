import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/card";

const Home: NextPage = ({ products }: any) => {
  console.log("products", products);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap justify-center align-middle">
        {products.data?.products.results.map((p: any) => (
          <Card
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.images[0].file.url}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await axios.get("http://localhost:3000/api/get-all-products");

  return {
    props: {
      products: data.data,
    },
  };
};
