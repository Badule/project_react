import React, { useState, useEffect } from "react";
// import { NavLink } from "react-bootstrap";
import { useCart } from "react-use-cart";
// import { Thanks } from "./Thanks";

export function CheckoutForm() {
  const { emptyCart, totalUniqueItems, items, totalItems, cartTotal } =
    useCart();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (firstName && lastName && email && address) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [firstName, lastName, email, address]);

  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formCompleted) {
 emptyCart();
      setOrderPlaced(true);

      // console.log("Nume:", lastName);
      // console.log("Prenume:", firstName);
      // console.log("Email:", email);
      // console.log("Adresa:", address);
    }
   
  };

 

  return (
    <div>
      <div>
        <h2 className="adress">Shipping Address</h2>
      </div>
      <div className="CheckFrom">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <label> Nume: </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              name="lastName"
              required
            />

            <label>Prenume:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
            />

            <label>Adresă:</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              type="text"
              name="address"
              required
            />

            <label>Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
              name="email"
              required
            />
            <br />
            <label>
              Metoda de plată:
              <select name="paymentMethod">
                <option value="card">Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Plata la Livrare</option>
              </select>
            </label>
            <br />

           
              <button
                className="btn btn-outline"
                type="submit"
                disabled={!formCompleted}
              >
                Finalizează comanda
              </button>
          
          </form>
        </div>
        <div>
          {orderPlaced && ( 
            
              <h1 className="Comanda">Va multumim pentru comanda!</h1>
            
          )}
        </div>

        <div className="col-md-6 right">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2>
                Cart ({totalUniqueItems}) Total Items:({totalItems})
              </h2>
              <table className="table table-light table-hover m-0 w-full shadow">
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img className="IMG" src={item.img} alt="poza" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price} Lei</td>
                      <td>Quantity({item.quantity})</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="total">
              <span>Total Price: {cartTotal} Lei</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
