/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fvchar',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    // contentSecurityPolicy key in the ENV variable. This allows for live reloading
    ENV.contentSecurityPolicy = {
        'script-src':  "*",
        'font-src':    "*",
        'connect-src': "'self' wss://*.c9users.io:8081/",
        'style-src':   "'self' https://*.c9users.io:8081/",
        'object-src':  "*",
        'img-src':     "*"
    };
  }

  if (environment === 'test') {
    // contentSecurityPolicy key in the ENV variable. This allows for live reloading
    ENV.contentSecurityPolicy = {
        'script-src':  "*",
        'font-src':    "*",
        'connect-src': "'self' wss://*.c9users.io:8081/",
        'style-src':   "'self' https://*.c9users.io:8081/",
        'object-src':  "*",
        'img-src':     "*"
    };
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
