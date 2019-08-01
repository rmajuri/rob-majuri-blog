import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

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
        {aboutPage.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: aboutPage.html }} />
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
