const SingleHomeCategory = ({ Icon }) => {
  return (
    <div
      className="home-categories
          h-20
          w-20
          rounded-xl
          flex
          justify-center
          items-center
          bg-white cursor-pointer hover:shadow-md transition-translate-shadow hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
    >
      {Icon && <Icon className="h-12 w-12 text-gray-500" />}
    </div>
  );
};

export default SingleHomeCategory;
