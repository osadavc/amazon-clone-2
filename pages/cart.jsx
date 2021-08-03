import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import CartPage from "../components/CartPage/CartPage";
import { db } from "../firebase";

const cart = ({ firestoreCart }) => {
  return (
    <>
      <Head>
        <title>Cart | Amazon 2.0</title>
        <link
          rel="icon"
          href="https://pngimg.com/uploads/amazon/amazon_PNG27.png"
        />
      </Head>

      <div className="bg-gray-white w-full h-screen overflow-hidden">
        <Header />
        <div className="flex h-screen ">
          <Sidebar />
          <CartPage firestoreCart={firestoreCart} />
        </div>
      </div>
    </>
  );
};

export default cart;
