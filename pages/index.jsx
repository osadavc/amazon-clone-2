import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage/HomePage";
import Sidebar from "../components/Sidebar/Sidebar";
import { db } from "../firebase";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
        <link
          rel="icon"
          href="https://pngimg.com/uploads/amazon/amazon_PNG27.png"
        />
      </Head>

      <div className="bg-gray-100 w-full h-screen overflow-hidden">
        <Header />
        <div className="flex h-screen ">
          <Sidebar />
          <HomePage serverProducts={products} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const firestoreProducts = await db.collection("products").get();

  const products = firestoreProducts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  }));

  return {
    props: {
      products,
    },
  };
};
