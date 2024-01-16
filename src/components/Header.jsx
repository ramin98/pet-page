import petFoot from "../assets/images/pet.png";
import burgerMenu from "../assets/images/burger-bar.png";
import exit from "../assets/images/button.png";
import { useRef } from "react";

function Header() {
  let menu = useRef(null);

  return (
    <header>
      <nav>
        <a href="#">
          <img className="logo" src={petFoot} alt="petFoot" />
        </a>
        <ul ref={menu}>
          <button
            onClick={() => {
              console.log(menu);
              menu.current.className = "";
            }}
            className="menu-exit"
          >
            <img src={exit} alt="exit" />
          </button>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Animals</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li className="auth">
            <button className="site-button">Login</button>
            <button className="site-button">Sign Up</button>
          </li>
        </ul>
        <button
          onClick={() => {
            console.log(menu);
            menu.current.className = "show";
          }}
          className="burger-menu"
        >
          <img src={burgerMenu} alt="burgerMenu" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
