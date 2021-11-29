const hepburn = require('./creates/hepburn');

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  beforeRequest: [],

  afterResponse: [],

  resources: {},

  triggers: {},

  searches: {},

  creates: {
    [hepburn.key]: hepburn
  }
};

module.exports = App;