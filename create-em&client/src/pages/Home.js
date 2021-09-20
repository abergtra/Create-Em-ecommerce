//import react
import React, { useState } from "react";

//import products and categories
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

//Home function
const Home = () => {
    const [currentCategory, setCategory] = useState("");
    //display category section above product section
    return (
        //Category menu to display all categories
        //Product list display only products related to current category
        <div className="container">
            <CategoryMenu setCategory={setCategory} />
            <ProductList currentCategory={currentCategory} />
        </div>
    );
};

export default Home;
