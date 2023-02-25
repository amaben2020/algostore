import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({ products }: any) => {
  console.log("products", products);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {products.data.products.results.map((p: any) => (
          <div >
            <h4>{p.name}</h4>

            <p>${p.price}</p>
          </div>
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
