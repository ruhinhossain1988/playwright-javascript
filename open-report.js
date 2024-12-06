const open = require('open');
const path = require('path');

(async () => {
    try {
        const reportPath = path.resolve(__dirname, 'playwright-report/index.html');
        console.log(`Opening report: ${reportPath}`);
        await open(reportPath); // Opens the HTML report in the default browser
    } catch (error) {
        console.error('Failed to open the Playwright report:', error);
    }
})();
