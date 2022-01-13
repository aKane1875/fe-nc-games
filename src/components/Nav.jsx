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
    <header className="header">
      <Link to={"/reviews"}>
        <h1 id="heading">Northcoders Games Reviews</h1>
      </Link>
      <nav className="nav">
        {categories.map((category) => {
          return (
            <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
              {category.slug.toUpperCase()}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
