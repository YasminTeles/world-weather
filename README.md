# Word Weather

This application show weather information of cities around the world.

## Getting Started

First, run the development server:

```bash
make setup
make run
```

Next, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

This project uses the following technologies:

For continuos integration:

- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
- [Editor config](https://editorconfig.org/) - EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [Commit lint](https://github.com/conventional-changelog/commitlint) - Commit lint checks if your commit messages meet the conventional commit format.
- [Prop Types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props and similar objects.

For tests:

- [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Enzyme](https://enzymejs.github.io/enzyme/) - Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.

For style guide:

- [Material UI](https://material-ui.com/pt/) - A popular React UI framework.

For requests:

- [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js.

For context performance:

- [Use Context Selector](https://github.com/dai-shi/use-context-selector) - React hook to memorize context selector.
- [Scheduler](https://nextjs.org/docs) - Peer dependency of Use context selector.

For word map:

- [React Simple Maps](https://www.react-simple-maps.io/) - Create beautiful SVG maps in react with d3-geo and topojson using a declarative api..

For create react project:

- [Next.js](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Lodash](https://nextjs.org/docs) - Lodash is life =D.

## What could improve?

- Add more and more tests.
- Add the application to a container, like docker. This makes deploying easier.
- Add an scroll to city listing when search button is clicked.
- Add an back to top button at the end of the city listing.
- Add more countries and cities in the world map.
