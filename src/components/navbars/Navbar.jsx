import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ type }) {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="Navigation">
      <nav>
        <div className="Logo">
          <button>
            <svg width={90} height={24} />
          </button>
        </div>
        <ul className={`${toggle ? "slide" : ""}`}>
          <li className="hidden">
            <a href="">BCR</a>
          </li>
          <li>
            <a href="#our-service">Our Service</a>
          </li>
          <li>
            <a href="#why-us">Why Us</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <div className="menu-toggle">
          <input type="checkbox" onClick={() => setToggle(!toggle)} />
          <span />
          <span />
          <span />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
