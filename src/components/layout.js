import React from "react"
import { Link } from "gatsby"
import Nav from "./navbar"
import style from "./layout.module.css"
import Bio from "./bio"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `var(--main)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `var(--main)`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <div className={style.navAndHeaderContainer}>
          <Nav />
          <div
            className={
              location.pathname === rootPath
                ? style.mobileHeaderHome
                : style.mobileHeaderPost
            }
          >
            <header>{header}</header>
          </div>
        </div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
          className={style.contentTop}
        >
          <header className={style.webHeader}>{header}</header>
          <main>{children}</main>
          <Bio />
          <footer>
            © {new Date().getFullYear()} Rob Majuri, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
