import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import style from "./bio.module.css"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/rob.jpeg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_noBase64
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
        I&apos;m a software engineer and lover of people, art, and culture.
      </p>
    </div>
  )
}

export default Bio
