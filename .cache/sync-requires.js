const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/xhoanakoca/Desktop/gatsbyPortfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/xhoanakoca/Desktop/gatsbyPortfolio/src/pages/404.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/xhoanakoca/Desktop/gatsbyPortfolio/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/xhoanakoca/Desktop/gatsbyPortfolio/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/xhoanakoca/Desktop/gatsbyPortfolio/src/pages/privacy.js")))
}

