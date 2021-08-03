import { db } from "../../firebase";

const SingleHotDeal = ({ id, image, name, brand, rating, price }) => {
  const addToCart = () => {
    let cartItem = db.collection("cart").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          qty: doc.data().qty + 1,
        });
      } else {
        cartItem.set({
          id: id,
          qty: 1,
        });
      }
    });
  };

  return (
    <div className="main-product cursor-pointer bg-white p-2 rounded-lg flex flex-col items-center pb-4 hover:shadow-xl transition-translate-shadow hover:scale-[1.03] active:scale-100 active:shadow-none">
      <div className="product-image w-48 h-52 p-4">
        {image && <img src={image} className="w-full h-full object-contain" />}
      </div>
      <div className="product-name text-gray-700 font-bold mt-2 text-sm">
        {name}
      </div>
      <div className="product-make text-green-700 font-bold">{brand}</div>
      <div className="product-rating text-yellow-300 font-bold my-1">
        {rating}
      </div>
      <div className="product-price font-bold text-gray-700 text-lg">
        {price}
      </div>
      <div
        className="mt-3 bg-yellow-500 rounded w-32 h-10 flex items-center justify-center text-white hover:bg-yellow-600 hover:shadow-lg transition"
        onClick={addToCart}
      >
        Add to Cart
      </div>
    </div>
  );
};

export default SingleHotDeal;
