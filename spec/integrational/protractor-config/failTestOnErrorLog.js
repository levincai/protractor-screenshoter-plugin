var env = require('../environment');

exports.config = {
    seleniumAddress: env.seleniumAddress,
    framework: 'jasmine2',
    specs: ['../protractor/console-error-test.js'],
    plugins: [{
        path: '../../../index.js',
        screenshotPath: '.tmp/failTestOnErrorLog',
        screenshotOnExpect: 'failure',
        screenshotOnSpec: 'failure',
        failTestOnErrorLog: {
            failTestOnErrorLogLevel: 999, // all errors
        }
    }],
    onPrepare: function() {
        // returning the promise makes protractor wait for the reporter config before executing tests
        return global.browser.getProcessedConfig().then(function(config) {
            //it is ok to be empty
        });
    }
};
