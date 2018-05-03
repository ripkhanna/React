import webpack from 'webpack';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';


module.exports =  {
  
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  context: __dirname,
  entry: [
    
  'eventsource-polyfill',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  __dirname + './src/index.js'
    
  //path.resolve(__dirname, '/src/index.js'),
  //path.resolve(__dirname, '/src/index.html')
		], //"./app/entry", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  
   
  output: {
    // options related to how webpack emits results

    //path: path.resolve(__dirname, "dist"), // string
    
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: __dirname + "/dist",
    pathinfo: true,
    filename: "bundle.js", // string
    // the filename template for entry chunks

    publicPath: "/dist", // string
    // the url to the output directory resolved relative to the HTML page

    library: "MyLibrary", // string,
    // the name of the exported library
    libraryTarget: "umd"
    /*libraryTarget: "umd", // universal module definition
        libraryTarget: "umd2", // universal module definition
        libraryTarget: "commonjs2", // exported with module.exports
        libraryTarget: "commonjs", // exported as properties to exports
        libraryTarget: "amd", // defined with AMD defined method
        libraryTarget: "this", // property set on this
        libraryTarget: "var", // variable defined in root scope
        libraryTarget: "assign", // blind assignment
        libraryTarget: "window", // property set to window object
        libraryTarget: "global", // property set to global object
        libraryTarget: "jsonp", // jsonp wrapper
        
    // the type of the exported library

    /* Advanced output configuration (click to show) */
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.(js|jsx)?$/,
        exclude: path.resolve(__dirname, "/node_modules/"),
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['react',"es2015"]
            }
        }
    },
     

    {
      test: /\.html$/,
      use: [
        // apply multiple loaders and options
        
        {
          loader: "html-loader",
          options: { minimize: true }
        }
      ]
    }

   
    ],

    /* Advanced module configuration (click to show) */
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, ".")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
      // a list of module name aliases

      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

      //"module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    },
    /* alternative alias syntax (click to show) */

    /* Advanced resolve configuration (click to show) */
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

   // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react", /^@angular\//],
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3002'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoEmitOnErrorsPlugin(),
   new webpack.NamedModulesPlugin(),
  
  new webpack.LoaderOptionsPlugin({
    // test: /\.xxx$/, // may apply this only for some modules
    options: {
      context: path.join(__dirname, 'src'),
      output: {
        path: path.join(__dirname, 'www')
      }
    }
  }),
  new HtmlWebPackPlugin({
    template: path.resolve('dist', 'index.html'),
    filename: "index.html"
  })
    // ...
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */
};