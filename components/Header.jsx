import {
  ChevronDownIcon,
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/outline";
import Jdenticon from "react-jdenticon";
import Link from "next/link";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState, useEffect } from "react";

const Header = () => {
  const [cartItems] = useCollection(db.collection("cart"));
  const [total, setTotal] = useState(0);

  const getNumberOfItems = () => {
    cartItems?.docs.forEach((doc) => {
      setTotal((prevCount) => prevCount + doc.data().qty);
    });
  };

  useEffect(() => {
    setTotal(0);
    getNumberOfItems();
  }, [cartItems]);

  return (
    <div>
      <div className="flex bg-gray-900 justify-center items-center md:hidden">
        <Link href="/">
          <img
            src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
            className="w-28 h-16 object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="bg-gray-900 h-16 flex items-center">
        <div className="h-16 w-1/5 md:ml-10 hidden md:block">
          <Link href="/">
            <img
              src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
              className="w-28 h-16 object-contain cursor-pointer mt-[4px]"
            />
          </Link>
        </div>

        <input
          type="text"
          id="search"
          placeholder="Search ..."
          className="
            h-9
            w-30
            bg-gray-800
            border border-gray-500 border-opacity-75
            rounded-l-xl
            px-3
            text-white
            ml-6
            focus:outline-none
            placeholder-white
            font-poppins
          "
          autoComplete="off"
        />

        <div
          className="
            categories
            h-9
            w-30
            bg-gray-800
            border-r border-t border-b border-gray-500 border-opacity-75
            px-3
            text-white
            flex
            items-center
            font-montserrat
          "
        >
          Categories
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </div>

        <div
          className="
            search-icon
            bg-yellow-500
            h-9
            w-full
            sm:w-12
            rounded-r-xl
            flex
            justify-center
            items-center
            text-white
          "
        >
          <SearchIcon className="h-4 w-4" />
        </div>

        {/* Right Icons */}

        <div
          className="
            icons
            text-white
            flex
            items-center
            ml-auto
            mr-8
            w-48
            h-16
            justify-around
          "
        >
          <HeartIcon className="h-4 w-4 hidden md:block" />

          <Link href="/cart">
            <div
              className="
            cursor-pointer cart-icon h-10 w-10
              bg-yellow-500 flex justify-center items-center rounded-xl relative hover:bg-yellow-600 transition-colors ml-3 md:ml-0"
            >
              {total > 0 && (
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full flex justify-center items-center text-gray-800 text-xs">
                  {total}
                </div>
              )}
              <ShoppingCartIcon className="h-4 w-4" />
            </div>
          </Link>

          <BellIcon className="h-4 w-4 hidden md:block" />

          <div className="bg-gray-900 rounded-full hover:bg-gray-800 p-1 transition-colors cursor-pointer hidden md:block">
            <Jdenticon size="48" value="osada" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
