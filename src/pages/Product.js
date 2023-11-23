import React from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = (props) => {
  const { addItem } = useCart();

  return (
    <div className="cardT ">
      <div className="componente">
        <NavLink to={`/ProductDetail/${props.id}`}>
          <div className="title">
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="imagine">
            <img src={props.img} className="card-img1" alt="poza" />
          </div>
          <div className="descriere">
            <p className="card-text">{props.desc}</p>
          </div>
        </NavLink>
      </div>
      <div className="card-body">
        <div className="price">
          <NavLink to="../Cart">
            <button
              className="btn btn-ghost bg-slate-500"
              onClick={() => addItem(props.item)}
            >
              ADD to Cart
            </button>
          </NavLink>
          <button className=" Price"> Price {props.price} Lei</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
