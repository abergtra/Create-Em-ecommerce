//import react and query
import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";

//Function to display category HTML
function CategoryMenu({ setCategory }) {
    const { data: categoryData } = useQuery(QUERY_CATEGORIES);
    const categories = categoryData?.categories || [];

    return (
        <div>
            <h2>Choose a Charcuterie:</h2>
            {categories.map((item) => (
                <button
                    key={item._id}
                    onClick={() => {
                        setCategory(item._id);
                    }}
                    >
                    {item.name}
                </button>
      ))}
        </div>
    );
}

export default CategoryMenu;