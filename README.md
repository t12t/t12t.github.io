# t12t Website

## Dependencies

- [Node](https://nodejs.org)
- [Npm](https://www.npmjs.com)

## Getting started

This site is built with [Eleventy, a static site generator](https://www.11ty.dev/).

### Setup

Run the following in your terminal.

```
git clone https://github.com/t12t/t12t.github.io.git
cd t12t.github.io
npm install
```

### Development

The development command sets up watchers for relevant files, and starts the build with Eleventy.

```
npm run dev
```

### Production Build

The production command builds the site in the same way it will be built in production.

```
npm run build
```

This command doesn't start a server but you can use any server of your choice to view the built site. A suggestion is [to install serve](https://www.npmjs.com/package/serve).

## Deployment

The site will be deployed whenever something is merged to the master branch. We are hosting our site on Github and we are using Github actions for our deploys.
