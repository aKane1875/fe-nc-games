import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((returnedCategories) => {
        setCategories(returnedCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <header>
      <h1>Northcoders Games Reviews</h1>
      <nav>
        {categories.map((category) => {
          return (
            <Link
              to={`/categories/?category=${category.slug}`}
              key={category.slug}
            >
              {category.slug}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
