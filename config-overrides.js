/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/components'),
    '@views': path.resolve(__dirname, './src/views'),
    '@assets': path.resolve(__dirname, './src/assets'),
  })
);
