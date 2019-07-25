import React from "react"
import style from "./navbar.module.css"
import { Link } from "gatsby"

export default () => (
  <nav role="navigation">
    <div id={style.menuToggle}>
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id={style.menu}>
        <Link className={style.navItem} to={"/"}>
          <li>Home</li>
        </Link>
        <Link className={style.navItem}>
          {" "}
          <li>About</li>
        </Link>
        <Link className={style.navItem}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  </nav>
)
