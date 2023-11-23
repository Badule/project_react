
import React from "react";
import Product from "./Product";
import data from "../data";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Childrens Books</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="carti">
            {data.productData.map((item) => (
              <Product
                key={item.id}
                id={item.id} 
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
