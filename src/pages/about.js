import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import style from "./about.module.css"

export default ({ data, location }) => {
  const aboutPage = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={aboutPage.frontmatter.title} />
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
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3 className={style.tech_heading}>Libraries</h3>
          <ul>
            <li>React.js</li>
            <li>React Native</li>
            <li>Express</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      <h2>Story</h2>
      <p>Hi there. I'm Rob Majuri.</p>
      <p>I'm an English teacher turned software developer.</p>
      <p>
        I have a deep love for learning the technical elements of a craft and
        then synthesizing that knowlegde to create something new. I've done this
        in the past while composing music and writing and literature. I
        ultimately decided to invest my creative energies in software
        development because the discpline allows me to create products that are
        useful to others in their daily lives.
      </p>
      <p>
        Not to mention that the life of a developer is full of what I love doing
        most - learning.
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      id
      html
      excerpt
      frontmatter {
        title
        description
      }
    }
  }
`
