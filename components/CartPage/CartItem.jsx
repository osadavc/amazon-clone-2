import { useEffect } from "react";

import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XIcon,
} from "@heroicons/react/outline";
import { db } from "../../firebase";

const CartItem = ({ id, image, name, brand, price, total, setTotal, qty }) => {
  const deleteItem = () => {
    db.collection("cart").doc(id).delete();
  };

  const decreaseCount = (id) => {
    const itemRef = db.collection("cart").doc(id);
    itemRef.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().qty > 1) {
          itemRef.update({
            qty: doc.data().qty - 1,
          });
        }
      }
    });
  };

  const increaseCount = (id) => {
    const itemRef = db.collection("cart").doc(id);
    itemRef.get().then((doc) => {
      if (doc.exists) {
        itemRef.update({
          qty: doc.data().qty + 1,
        });
      }
    });
  };

  return (
    <div className="text-black flex items-center pb-4 border-b border-gray-100">
      <div className="w-40 h-24 bg-white p-4 rounded-lg">
        <img src={image} className="w-full h-full object-contain" />
      </div>

      <div className="flex-grow">
        <div className="font-bold text-sm text-gray-600">{name}</div>

        <div className="text-sm text-gray-400">{brand}</div>
      </div>

      <div className="w-48 flex items-center">
        <div
          className="cursor-pointer text-gray-400 bg-gray-100 rounded w-6 h-6 flex justify-center items-center hover:bg-gray-200 transition-colors mr-2"
          onClick={() => {
            decreaseCount(id);
          }}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </div>

        <h4 className="text-gray-400">x{qty}</h4>

        <div
          className="cursor-pointer text-gray-400 bg-gray-100 rounded w-6 h-6 flex justify-center items-center hover:bg-gray-200 transition-colors ml-2"
          onClick={() => {
            increaseCount(id);
          }}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </div>
      </div>

      <div className="w-48 font-bold text-gray-400 ">{`$ ${(
        price * qty
      ).toFixed(2)}`}</div>

      <div
        className="w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400"
        onClick={deleteItem}
      >
        <XIcon className="h-4 w-4" />
      </div>
    </div>
  );
};

export default CartItem;
