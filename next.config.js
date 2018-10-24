const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, 'keybase.txt'), join(outDir, 'keybase.txt'))
    return defaultPathMap
  }
}
