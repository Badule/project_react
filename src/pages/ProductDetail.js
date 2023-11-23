//
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import data from "../data";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";



const ProductDetail = () => {
  
  
  const [color, setColor] = useState(); // Starea inițială a culorii

  // Funcția pentru a schimba culoarea la click
  const changeColor = () => {
    const newColor = color === "pink" ? "pink" : "gray";
    setColor(newColor);
  };

  // Utilizează useEffect pentru a monitoriza schimbările de culoare
  useEffect(() => {
    // Aici putem aplica orice logică suplimentară atunci când culoarea se schimbă
  }, [color]);

  const { id } = useParams();
  // console.log("id din URL:", id);

  const productId = parseInt(id, 10);
  // console.log("productId:", productId);

  const product = data.productData.find((item) => item.id === productId);

  console.log("Produs găsit:", product);

  if (!product) {
    return <div>Produsul nu a fost găsit</div>;
  }
 
  const { img, title, desc, price } = product;

  return (
    <div>
      <div>
        <NavLink to="/">
          <button className="btn btn-ghost button"> Back to Homepage</button>
        </NavLink>
      </div>

      <div class="cardTitle">
        <div class="img">
          <img src={img} alt="poza" className="img" />
        </div>
        <div className="title1">
          <div>
            <h2 className="tTitle">{title}</h2>
          </div>

          <div className="desc">
            <p> {desc}</p>
          </div>
          <div class="cart">
            <NavLink to="/cart">
              <button
                className="btn btn-ghost bg-slate-500"
             
              >
                Adauga in cos
              </button>
            </NavLink>

            <p>Pret: {price}Lei</p>
          </div>
        </div>
      </div>
      <div class="icons">
        <BsFacebook
          className="inline pr-2 text-3xl icon-link"
          style={{ color: color }}
          onClick={changeColor}
        />
        <NavLink
          to=""
          className="text-lg font-bold align-middle icon-link "
        >
          Facebook
        </NavLink>
        <div className="icons">
          <AiOutlineInstagram
            className="inline pr-2 text-3xl icon-link"
            style={{ color: color }}
            onClick={changeColor}
          />
          <NavLink
            to=""
            className="text-lg font-bold align-middle icon-link"
          >
            Instagram
          </NavLink>
        </div>
        <div className="icons">
          <AiFillTwitterCircle
            className="inline pr-2 text-3xl icon-link"
            style={{ color: color }}
            onClick={changeColor}
          />
          <NavLink
            to=""
            className="text-lg font-bold align-middle icon-link"
          >
            Twitter
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
