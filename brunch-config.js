// See http://brunch.io for documentation.
module.exports = {
  paths: {
    watched: ['_assets'],
    public: 'assets'
  },
  files: {
    stylesheets: {
      joinTo: 'css/main.css'
    }
  },
  conventions: {
    assets: [
      '_assets/_files',
      '_assets/_images'
    ]
  },
  npm: {
    styles: {
      "normalize.css": ['normalize.css']
    }
  },
  plugins: {
    postcss: {
      processors: [
        require('postcss-import'),
        require('postcss-custom-properties'),
        require('autoprefixer')(['last 8 versions']),
        require('csswring')()
      ]
    }
  }
};
