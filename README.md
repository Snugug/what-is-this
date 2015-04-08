# What Is This

Learning about JavaScript's `this` through testing using [Karma](http://karma-runner.github.io/0.12/index.html), [Mocha](http://mochajs.org/), and [Chai](http://chaijs.com/).

## Installation

[Node.js](https://nodejs.org/) is required to run the tests. Once installed, run `npm install` in the command line, from within this folder, to install all dependencies.

## Folder Structure

The different scenarios where `this` can change are in the `things-to-test` folder. Each item in there has a corresponding test suite in `tests`.

`things-to-test/polyfill.js` is a polyfill for the native `Function.prototype.bind` that is missing in PhantomJS 1.x

`tests/setup.js` is the setup allowing for Chai to be used in browser

## Running

Run `npm test` in the command line, from within this folder, to run all of the tests. If you would like Karma to poll for changes to your files and rerun the tests on changes, change `singleRun: true` on line 13 of `index.js` to `singleRun: false`.
