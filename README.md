# UI for Backstop Vissual regression tool

This is an interface for the testing tool [BackstopJS](https://garris.github.io/BackstopJS/). BackstobJS is a visual regression testing tool which aims to compare website user interfaces and locate the vissual differences.

## The interface

The interface follows the simple structure of first creating test scenarios and then, based on these, generate a report. For each scenario, 3 things are needed:

- Label - the name we want to call this scenario
- Url - the url for the website that might contain differenting content
- Reference url - the url for the original website, the site that should be compared against.

Add as many scenarios as you like. All will be added to the report.

In the report each scenario is divided into a mobile-, tablet- and desktop view. Clicking any of these will display a more detailed view where you can click and drag with your mouse to see the diffs more detailed.

### If inputting an url that doesn't exist

If you have inputted an url that doesn't exist, the UI will not generate a report and stop in loading mode. If this happens, just reload the page and try again.

## Installation

1. Visit <https://github.com/reubenvas/vr-test-verisure> and read this descirption

2. Install [Node.js](https://nodejs.org/en/). This is needed for running all javascript apps

3. Download the app as zip. Click [here.](https://github.com/reubenvas/vr-test-verisure/archive/master.zip) Then unzip (extract) the directory. (You could also use the git cli instead)

4. Open the terminal (powershell) inside this directory. See [this](https://www.addictivetips.com/windows-tips/open-powershell-in-a-specific-location/) instruction for easily opening powershell in your directory. (You could also use the shell command 'cd' instead)

5. In the terminal, paste this command to download the necessary dendencies:

```npm
npm install
```

6. Once finished, paste this command in the terminal to build the app for production:

```npm
npm run build
```

7. Once finished, start the app by pasting this command in the terminal:

```npm
npm run start:prod
```

8. Use the app by entering <http://localhost:3000/> in your preferable web browser

### To open and use the app, just:

1. Open the terminal (powershell) inside this directory. See [this](https://www.addictivetips.com/windows-tips/open-powershell-in-a-specific-location/) instruction for easily opening powershell in your directory. (You could also use the shell command 'cd' instead)

2. Then paste this command:

```npm
npm run start:prod
```

3. Use the app by entering <http://localhost:3000/> in your preferable web browser
