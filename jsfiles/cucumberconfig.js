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
    specs: ['../features/start1.feature'],
    cucumberOpts: {
        // require step definitions
        require: ['./stepdefinition/*.ts'
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFVyxRQUFBLE1BQU0sR0FBVztJQUN4Qiw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUkvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUdyQyxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFLENBQUUsdUJBQXVCO1NBQ2pDO0tBQ0Y7Q0FDSixDQUFDIn0=