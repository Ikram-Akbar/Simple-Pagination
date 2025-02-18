import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

type Category = {
  id: number;
  name: string;
  image: string;
};

const Categories = () => {
  const [selected, setSelected] = useState<string>("All");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="w-64 h-screen bg-gray-100 text-base p-4 rounded-lg">
      <div className="flex items-center space-x-2 border-b pb-2 mb-2">
        <FaSearch className="text-gray-400" />
        <h2 className="text-lg font-light">Categories</h2>
      </div>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className={`cursor-pointer px-4 py-2 rounded-lg ${
              selected === category.name
                ? "bg-emerald-500 text-white"
                : "hover:bg-emerald-100"
            }`}
            onClick={() => setSelected(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
