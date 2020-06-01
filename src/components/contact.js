import React from "react"
import { rhythm } from "../utils/typography"
import { graphql } from "gatsby"

export default ({ data }) => {
  const content = data.markdownRemark
  return (
    <div>
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
    </div>
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
