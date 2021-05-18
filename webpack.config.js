// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   devtool: 'source-map',
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   devServer: {
//     contentBase: DIST_DIR,
//     open: true,
//     clientLogLevel: 'silent',
//     port: 3000
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env', 'react'],
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader'}
//         ]
//       }
//     ]
//   }
// };

// const path = require('path')

// module.exports = {
//   entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   }
// }

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client', 'dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 3000
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
  }
}