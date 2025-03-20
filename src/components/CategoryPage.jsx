import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>Category: {categoryName}</h2>
      {/* Display category-specific products here */}
    </div>
  );
};

export default CategoryPage;
