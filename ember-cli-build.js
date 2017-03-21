/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: ['app'],
    },

    'ember-cli-staticboot': {
      paths: [
        '/'
      ],
    },

    dotEnv: {
      clientAllowedKeys: [
        'CB_INSTAGRAM_USER_ID',
        'CB_INSTAGRAM_ACCESS_TOKEN',
      ],
    }
  })

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // if (!process.env.EMBER_CLI_FASTBOOT) app.import('bower_components/sticky-kit/jquery.sticky-kit.js')

  // https://github.com/leafo/sticky-kit/issues/220
  if (!process.env.EMBER_CLI_FASTBOOT) app.import('bower_components/sticky-kit/sticky-kit.js')

  return app.toTree()
}
