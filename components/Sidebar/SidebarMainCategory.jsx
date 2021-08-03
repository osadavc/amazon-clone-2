import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarMainCategory = ({ name, Icon, selected, foawe }) => {
  return (
    <div
      className={
        selected
          ? `sidebar-main-category
      text-yellow-500
      cursor-pointer
      flex
      font-semibold
      p-2
      bg-gray-700
      rounded-lg items-center `
          : `cursor-pointer
      flex
      font-bold
      p-2
      hover:bg-gray-700
      rounded-lg items-center`
      }
    >
      <span className="w-8">
        {Icon ? (
          <Icon className="h-5 w-5" />
        ) : (
          <FontAwesomeIcon icon={foawe} className="ml-1 h-4 w-4" />
        )}
      </span>

      <span>{name}</span>
    </div>
  );
};

export default SidebarMainCategory;
