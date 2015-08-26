var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/specs\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    paths: {
        // External libraries
        'angular': '/base/node_modules/angular/angular',
        'angularMocks': '/base/node_modules/angular-mocks/angular-mocks'
    },

    baseUrl: '/base/app/module',

    shim: {
        'angular': {'exports': 'angular'},
        'angularMocks': {deps: ['angular'], 'exports': 'angularMock'}
    },

    // Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});