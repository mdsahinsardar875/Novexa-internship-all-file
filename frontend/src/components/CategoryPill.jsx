const CategoryPill = ({ category, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border-2 transition-all whitespace-nowrap ${
        active
          ? "text-white border-transparent shadow-md scale-105"
          : "text-gray-600 border-gray-200 hover:border-brand-purple/50 bg-white"
      }`}
      style={active ? { backgroundColor: category.color || "#7C3AED" } : {}}
    >
      <span>{category.icon}</span>
      {category.name}
    </button>
  );
};

export default CategoryPill;
