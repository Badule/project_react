import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";

export function Contact() {
  const [color, setColor] = useState(); // Starea initiala a culorii

  // Functia pentru a schimba culoarea la click
  const changeColor = () => {
    const newColor = color === "pink" ? "pink" : "gray";
    setColor(newColor);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detalii, setDetalii] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (name && email && detalii) {
      setFormCompleted(true);
    } else {
      setFormCompleted(false);
    }
  }, [name, email, detalii]);
  useEffect(() => {}, [color]);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <div>
        <h1 className="mb-5 text-center">Contact Page</h1>
      </div>
      <div className="Contact">
        <div className="Form1">
          <div className="form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <br></br>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  type="text"
                  name="Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="text"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="detalii">Detalii</label>
                <input
                  value={detalii}
                  onChange={(e) => setDetalii(e.target.value)}
                  placeholder="Detalii"
                  type="text"
                  name="detalii"
                  required
                />
              </div>
              <div>
                <button
                  className="btn btn-neutral"
                  type="submit"
                  disabled={!checked}
                >
                  Submit
                </button>

                <div className="check">
                  <p>
                    I agree to the Terms and Conditions of this website.{" "}
                    {checked.toString()}
                  </p>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="Contact1">
          <h2 className="nu">Nu ezita: contactează-ne!</h2>
          <MdOutlineLocationOn className="inline pr-2 text-3xl icon-link" />{" "}
          Bucuresti<br></br>Str.Delureni,Nr.48
          <br />
          <MdOutlineEmail className="inline pr-2 text-3xl icon-link" /> E-mail
          <br />
          info@books365.ro
          <h2 className="nu">
            {" "}
            Suntem sociabili
            <CiFaceSmile className="inline pr-2 text-3xl icon-link" />
          </h2>
          <div className="Icons">
            <div className="icons">
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
        </div>
      </div>
    </div>
  );
}
