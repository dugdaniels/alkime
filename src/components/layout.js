/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"

const style = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap');

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  align-items: center;
  padding: 40px;

  p {
    margin 1rem 0;
  }
`

const Layout = ({ children }) => {
  return <main css={style}>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
