/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"

const style = css`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }) => {
  return <main css={style}>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
