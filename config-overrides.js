const rewireMobX = require('react-app-rewire-mobx');
const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
const {  addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
 addDecoratorsLegacy()
 );