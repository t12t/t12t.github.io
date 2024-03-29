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

## Test

### Pa11y

You can run a manual test on your local machine [with Pa11y CI](https://github.com/pa11y/pa11y-ci).
To do this make sure [your development server is running](#development) first. Then run the command for pa11y.

```
npm run test-pa11y
```

### Broken Links

You can check the site for broken links by running the following command. To test locally change the `URL` to `http://localhost:8080`.

```
URL=http://t12t.se npm run test-links
```

Note! LinkedIn returns HTTP 999 and appears broken even though it's not. LinkedIn is excluded from the link test right now to avoid confusing errors. Test links to LinkedIn manually to make sure they work.

## Deployment

The site will be deployed whenever something is merged to the main branch. We are hosting our site on Github and we are using Github actions for our deploys.

## Contribution

Feel free to suggest improvements and report issues. [Read more about contributing to our site](CONTRIBUTING.md).
