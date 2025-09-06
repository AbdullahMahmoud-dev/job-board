import React from "react";

const categories = ["Software Development", "Marketing", "Design", "Sales"];

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="category-select"
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
