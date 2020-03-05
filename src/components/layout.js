/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"

const style = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap');

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  align-items: center;
  padding: 2rem;
`

const Layout = ({ children }) => {
  return <main css={style}>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
