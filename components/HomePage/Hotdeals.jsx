import SingleHotDeal from "./SingleHotDeal";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

const Hotdeals = ({ serverProducts }) => {
  const [products] = useCollection(db.collection("products"));

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 mb-3 mt-6 font-poppins">
        Hot Deals 🔥
      </h1>

      <div className="main-section-proPucts text-black grid gap-5 mb-8 font-montserrat md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products
          ? products.docs.map((product) => (
              <SingleHotDeal
                key={product.id}
                id={product.id}
                image={product.data().image}
                name={product.data().name}
                brand={product.data().brand}
                rating={`${"⭐".repeat(product.data().rating)} ${
                  product.data().rating
                }`}
                price={`$ ${product.data().price}`}
              />
            ))
          : serverProducts.map((product) => (
              <SingleHotDeal
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                brand={product.brand}
                rating={`${"⭐".repeat(product.rating)} ${product.rating}`}
                price={`$ ${product.price}`}
              />
            ))}
      </div>
    </div>
  );
};

export default Hotdeals;
