const SidebarSubCategory = ({ name }) => {
  return (
    <div className="sidebar-sub-category cursor-pointer flex p-2">
      <span className="w-8"></span>
      <span>{name}</span>
    </div>
  );
};

export default SidebarSubCategory;
