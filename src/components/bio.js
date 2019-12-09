import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import style from "./bio.module.css"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
      className={style.bioContainer}
    >
      <Link to={"/"} className={style.link} style={{ boxShadow: `none` }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 100,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `100%`,
          }}
        />
      </Link>
      <p>
        I&apos;m a fullstack software developer and lover of people, art, and culture.
        {` `}
        <a
          style={{
            color: `var(--main)`,
          }}
          href={`https://twitter.com/${social.twitter}`}
        >
          Follow me on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
