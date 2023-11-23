import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";


export function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) {
    return (
      <div className="dvs">
        <h2 className="text-center">Coșul dvs. este gol</h2>

        <p className="text-center">
          Vă rugăm să adăugați produse în coș pentru a continua cumpărăturile.
        </p>
        <div>
          <NavLink to="/">
            <button className="btn btn-neutral">
              Inapoi la pagina principala
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <section className="py-4 container">
      <div className="back">
        <NavLink to="/">
          <button className="btn btn-neutral">Back to Homepage</button>
        </NavLink>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
          <h2>
            Cart ({totalUniqueItems}) Total Items:({totalItems})
          </h2>
          <table className="table table-light table-hover m-0 w-full shadow ">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={item}>
                    <td>
                      <img
                        className="IMG"
                        src={item.img}
                        style={{ height: "50%" }}
                        alt="poza"
                      />
                    </td>
                    <td> {item.title}</td>
                    <td> {item.price} Lei</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-outline ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-outline ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-outline btn-accent ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Items
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="total">
          <span>Total Price:{cartTotal} Lei </span>
        </div>
        <div className="checki">
          <button className="btn btn-danger m-2 " onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <NavLink to="/CheckoutForm">
            <button className="btn check">CheckoutForm</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
