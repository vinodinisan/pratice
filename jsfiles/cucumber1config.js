"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server.
    // export let config: Config
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        require: [
            './stepdef/*.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXIxY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXIxY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsbURBQW1EO0lBQ25ELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRTlELHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCxnQkFBZ0IsQ0FBQyxpQkFBaUI7U0FDbkM7S0FDRjtDQUdKLENBQUMifQ==