const ConvHelper = require('./conv-helper');
module.exports = {
  key: 'hepburn',

  noun: 'Hepburn',
  display: {
    label: 'Convert Hepburn(Roman Alphabet)',
    description: 'Convert katakana to hepburn(roman alphabet).',
  },

  operation: {
    inputFields: [
      { key: 'firstname', required: true, type: 'string' },
      { key: 'lastname', required: true, type: 'string' }
    ],
    perform: async (z, bundle) => {
      return await ConvHelper.conv2hepburn(bundle.inputData.firstname, bundle.inputData.lastname);
    },
  },
};