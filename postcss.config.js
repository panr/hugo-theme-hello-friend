const url = require('postcss-url')
const imports = require('postcss-import')
const nested = require('postcss-nested')
const stripComments = require('postcss-strip-inline-comments')
const postCSSPresetEnv = require('postcss-preset-env')
const browsers = require('browserslist')

module.exports = () => ({
  plugins: [
    stripComments,
    url,
    imports,
    nested,
    postCSSPresetEnv({
      stage: 1,
      browsers: 'last 2 versions',
    })
  ]
})
