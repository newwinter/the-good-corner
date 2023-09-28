import { Category } from "@/types/category.type"
import React from 'react'

type CategoryProps = {
  category: Category;
}

const Category = ({category}: CategoryProps ) => {
  return (
    <>
      <a
        href={`/?category=${category.id}`}
        className="category-navigation-link"
      >
        {category.name}
      </a>{" "}
      •
    </>
  );
}

export default Category
