import css from 'styled-jsx/css'

export default css.global`
  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    min-height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
    font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica, Arial,
      sans-serif;
    font-size: 12px;
    min-height: 100%;
    min-height: 100vh;
    color: #333;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    -webkit-text-size-adjust: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  ul,
  li {
    list-style: none;
  }
  iframe {
    display: none;
  }
  #app {
    height: 100vh;
  }
`
