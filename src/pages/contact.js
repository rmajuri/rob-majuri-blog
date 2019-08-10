import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../components/bio"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

export default ({ data, location }) => {
  const content = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: rhythm(1),
          color: `var(--main)`,
        }}
      >
        Contact
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

export const ContactPageQuery = graphql`
  query ContactPage {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Contact" } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
