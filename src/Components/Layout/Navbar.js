import { NavLink } from "react-router-dom";
import { GrBook } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Navbar() {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 py-2">
          <GrBook className="inline pr-2 text-3xl" />
          <NavLink to="/" className="text-lg font-bold align-middle">
            Lumea copiilor printre carti
          </NavLink>
        </div>

        <div className="flex-1 px-3 mx-3 p-2">
          <div className="flex justify-end">
            <NavLink to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </NavLink>
            <NavLink to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </NavLink>
            <NavLink to="/contact" className="btn btn-ghost btn-sm rounded-btn">
              Contact
            </NavLink>

            <NavLink to="../Cart" className="btn btn-ghost btn-sm rounded-btn">
              <AiOutlineShoppingCart className="inline pr-1 text-2xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
