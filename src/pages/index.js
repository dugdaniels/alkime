/** @jsx jsx */
import Layout from "../components/layout"
import SEO from "../components/seo"
import { jsx, css } from "@emotion/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div css={css`
      p {
        margin: 1.25rem 0;
      }
    `}>
      <h1 css={css`
        font-weight: 700;
        font-size: 1rem;
      `}>alkime</h1>
      <p>a digital design collaborative <br />(site coming soon)</p>
    </div>
  </Layout>
)

export default IndexPage
