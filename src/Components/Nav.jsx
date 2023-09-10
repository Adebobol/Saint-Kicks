import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.first}>
        <Logo />
        <ul>
          <li>
            <NavLink to="shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="features">FEATURES</NavLink>
          </li>
          <li>
            <NavLink to="contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
      <ul>
        <Search />
        <li>
          <NavLink to="login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="cart">CART(0)</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
