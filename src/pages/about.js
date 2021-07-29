import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import style from "./about.module.css"
import Bio from '../components/bio'

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query About {
      site {
        siteMetadata {
          title
          author
        }
      }
      aboutPic1: file(absolutePath: { regex: "/rob.jpeg/" }) {
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
      <h2>Main Tech</h2>
      <div className={style.tech_container}>
        <div>
          <div>
            <h3 className={style.tech_heading}>Languages Experience</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
          <h3 className={style.tech_heading}>Databases Experience</h3>
          <ul>
            <li>Mongo</li>
            <li>Firestore</li>
            <li>Microsoft SQL Server</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
        <div>
          <h3 className={style.tech_heading}>Tools Experience</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Jira</li>
            <li>Confluence</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div>
        <Image
          style={{ marginTop: rhythm(1) }}
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
        I&apos;m a software engineer living in the great city of
        Philadelphia.
      </p>
      <p>
        I love learning the technical elements of a craft and then synthesizing
        that knowledge to create something new. I&apos;ve done this my whole
        life through creative pursuits including composing music and writing
        literature.
      </p>
      <p>
        I ultimately decided to invest my creative energies in software
        development because what I&apos;m most passionate about is helping to build things that are useful
        to others in their daily lives. I have a particular passion for using my
        skills to help businesses and entrepreneurs reach their goals.
      </p>
      <p>
        The life of a software engineer is full of what I love most:{" "}
        <strong>
          <em>learning</em>
        </strong>
        .
      </p>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  )
}
