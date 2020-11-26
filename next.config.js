const { PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = require('next-env')
module.export = withNextEnv()

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I am in dev mode")
      
    return {
      ...defaultConfig,
      webpack: {
        // plugins: [new BundleAnalyzerPlugin()]
      }
    }
  }

  return defaultConfig
} 