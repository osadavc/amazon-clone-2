import CartItem from "./CartItem";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { Circle } from "better-react-spinkit";

const CartPage = () => {
  const [cartItems, loading] = useCollection(db.collection("cart"));
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartI = [];
    if (cartItems?.docs.length > 0) {
      cartItems?.docs.map((cartItem) => {
        db.collection("products")
          .doc(cartItem.id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              cartI = [
                ...cartI,
                {
                  id: doc.id,
                  name: doc.data().name,
                  brand: doc.data().brand,
                  image: doc.data().image,
                  rating: doc.data().rating,
                  price: doc.data().price,
                  qty: cartItem.data().qty,
                },
              ];

              setCart(cartI);
            }
          });
      });

      // getTotalCost();
    } else {
      setCart([]);
      // getTotalCost();
    }
  }, [cartItems]);

  // useEffect(() => {
  //   getTotalCost();
  // }, []);

  // const getTotalCost = () => {
  //   let totalCost = 0;
  //   cart?.forEach((singleItem) => {
  //     totalCost += (singleItem.price * singleItem.qty + 0).toFixed(2);
  //     setTotal(totalCost);
  //   });
  // };

  if (loading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Circle className="text-gray-400" size={50} />
      </div>
    );

  return (
    <div className="flex-1 p-6 bg-white font-montserrat overflow-y-auto pb-24">
      <h1 className="text-gray-400 text-3xl mb-8 font-bold">Shopping Cart</h1>
      {/* Table Title */}
      <div className="text-gray-400 flex font-bold">
        <h2 className="flex-grow ml-10 hidden md:inline">Product</h2>
        <h2 className="w-48 hidden md:inline">Count</h2>
        <h2 className="w-48 hidden md:inline">Total Cost</h2>
        <span className="w-10 hidden md:inline"></span>
      </div>

      {/* Cart Items */}
      <div className="mt-5">
        {cart.map((singleCartItem) => (
          <CartItem
            key={singleCartItem.id}
            id={singleCartItem.id}
            image={singleCartItem.image}
            name={singleCartItem.name}
            brand={singleCartItem.brand}
            price={singleCartItem.price}
            qty={singleCartItem.qty}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>

      <div className="complete-order flex  justify-end mt-10">
        <div className="total-cost mr-7">
          <h2 className="text-gray-400">Total Cost</h2>
          <div className="font-bold text-3xl text-gray-600">$ {total}</div>
        </div>
        <div className="complete-order-button w-56 flex justify-center items-center bg-yellow-500 rounded text-white cursor-pointer hover:bg-yellow-600 transition-colors">
          Complete Order
        </div>
      </div>
    </div>
  );
};

export default CartPage;
