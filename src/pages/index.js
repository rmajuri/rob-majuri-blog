import React from "react"
import { Link, graphql } from "gatsby"
import Work from "../components/work"
import Contact from "../components/contact"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import { rhythm, scale } from "../utils/typography"
import "./index.css"

class BlogIndex extends React.Component {
  render() {
    const { location, data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Rob Majuri" />
        <div className="webBio"></div>
          <div style={{ marginBottom: rhythm(3) }}>
            <p style={{ marginBottom: rhythm(2), ...scale(.5) }}>I&apos;m a software developer and lover of people, art, and culture.</p>
            <Image
              style={{ marginTop: rhythm(1) }}
              fluid={data.aboutPic1.childImageSharp.fluid}
            />
          </div>
          <Work location={location} data={data} />
          <About location={location} data={data}/>
          {/* <Contact location={location} /> */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Work" } }) {
      id
      html
      frontmatter {
        title
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
`
