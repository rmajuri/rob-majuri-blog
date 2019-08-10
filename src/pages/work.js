import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Bio from "../components/bio"
import "./work.css"

export default ({ data, location }) => {
  const content = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: rhythm(1),
          color: `var(--main)`,
        }}
      >
        Work
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  )
}

export const workPageQuery = graphql`
  query WorkPage {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Work" } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
