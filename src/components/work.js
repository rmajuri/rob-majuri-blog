import React from "react"
import { rhythm } from "../utils/typography"

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
        Work Samples
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
      <hr
        style={{
          marginBottom: rhythm(2),
        }}
      />
    </div>
  )
}