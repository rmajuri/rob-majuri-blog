import React, { useState } from "react"
import style from "./navbar.module.css"
import { Link } from "gatsby"

export default () => {
  const [expanded, setExpanded] = useState(false)

  const updateExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <nav role="navigation">
      <div id={style.menuToggle}>
        <button
          onClick={updateExpanded}
          aria-expanded={expanded}
          aria-controls="menu-list"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id={style.menu}>
          <Link className={style.navItem} to={"/"}>
            <li>Home</li>
          </Link>
          <Link className={style.navItem} to={"/about"}>
            <li>About</li>
          </Link>
          <Link className={style.navItem}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
