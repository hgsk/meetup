// node-qunitを使ったtestrunner
//

var runner = require("./node_modules/qunitjs/qunit/qunit.js");
runner.setup({
  log: {
    assertions: true,
    summary: true
  }
});

runner.run([
  /*
  {
    code: "./scripts/date_utils.js",
    tests: "./tests/date_utils_test.js",
    deps: "./scripts/underscorejs.js"
  },

  */
]);
