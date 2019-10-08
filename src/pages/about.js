import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import style from "./about.module.css"

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query About {
      site {
        siteMetadata {
          title
          author
        }
      }
      aboutPic1: file(absolutePath: { regex: "/about-pic-1.png/" }) {
        childImageSharp {
          fluid(maxWidth: 629, maxHeight: 417) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: rhythm(1),
          color: `var(--main)`,
        }}
      >
        About
      </h1>
      <h2>Tech</h2>
      <div className={style.tech_container}>
        <div>
          <h3 className={style.tech_heading}>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>C#</li>
            <li>SQL</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3 className={style.tech_heading}>Libraries/Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>.NET Core</li>
            <li>React Native</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Knockout.js</li>
            <li>jQuery</li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          style={{ marginTop: rhythm(1) }}
          className={style.image}
          fluid={data.aboutPic1.childImageSharp.fluid}
        />
      </div>
      <h2>Story</h2>
      <p>
        <span style={{ textTransform: "uppercase" }}>
          Hi there. I&apos;m Rob Majuri.
        </span>
      </p>
      <p>
        I&apos;m a software developer living and working in the great city of
        New Orleans.
      </p>
      <p>
        I love learning the technical elements of a craft and then synthesizing
        that knowlegde to create something new. I&apos;ve done this my whole
        life through creative pursuits including composing music and writing
        literature.
      </p>
      <p>
        I ultimately decided to invest my creative energies in software
        development because what I&apos;m most passionate about building are things that are useful
        to others in their daily lives. I have a particular passion for using my
        skills to help businesses and entrepreneurs reach their goals.
      </p>
      <p>
        The life of a developer is full of what I love most:{" "}
        <strong>
          <em>learning</em>
        </strong>
        .
      </p>
    </Layout>
  )
}
