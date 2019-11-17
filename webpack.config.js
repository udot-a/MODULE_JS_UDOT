const path = require ( 'path' )
module.exports = {
    entry: { main: './dist/main.js' },
    output: {
       path: path.resolve ( __dirname, 'build' ),
       filename: 'index.js'
    },
    module: {
       rules: [
          {
             test: /\.css$/,
             use: [
                'style-loader',
                'css-loader'
             ]
          }
       ]
    }
 }