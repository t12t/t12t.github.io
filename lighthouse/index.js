const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const open = require('open');

(async () => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', port: chrome.port};
  const runnerResult = await lighthouse('http://localhost:5000', options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  const reportDate = new Date()
                      .toISOString()
                      .replace(/T/, '-')
                      .replace(/\..+/,'');
  fs.writeFileSync(`./lighthouse/logs/${reportDate}-report.html`, reportHtml);

  await open(`./lighthouse/logs/${reportDate}-report.html`);

  // `.lhr` is the Lighthouse Result as a JS object
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
})();