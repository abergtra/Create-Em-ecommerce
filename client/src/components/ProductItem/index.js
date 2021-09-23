//import react
import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"

//Function to display Products
function ProductItem(item) {
    const {
      image,
      name,
      _id,
      price,
<<<<<<< HEAD
=======
      quantity
>>>>>>> feature/newtake
    } = item;
  
    return (
      <div className="card px-1 py-1">
        <Link to={`/products/${_id}`}>
          <img
            alt={name}
            src={`/images/${image}`}
          />
          <p>{name}</p>
        </Link>
        <div>
<<<<<<< HEAD
          
=======
          <div>{quantity} {pluralize("item", quantity)} in stock</div>
>>>>>>> feature/newtake
          <span>${price}</span>
        </div>
        <button>Add to cart</button>
      </div>
    );
  }
  
  export default ProductItem;