# react-shimmer-effect

> Animation is about creating illustion of life.

React-Shimmer-Effect, `<Shimmer>` component that simulates a [**shimmer**](https://github.com/facebook/Shimmer) effect for the  children elements.More customisable is on the way.

<p align="center">
  <a href="https://www.npmjs.com/package/react-shimmer">
    <img alt= "NPM" src="https://img.shields.io/npm/v/react-shimmer.svg">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
  <a href="https://codeclimate.com/github/eTechist/react-shimmer-effect">
    <img alt= "Maintainability" src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability">
  </a>
</p>

![Optional Text](/shimmer.js.png)


## Install

```bash
npm i react-shimmer-effect
```

## Usage

```jsx
import React, { Component } from "react";
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";

const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    borderRadius: "4px",
    backgroundColor: "white",
    display: "flex",
    padding: "16px",
    width: "200px"
  },
  circle: {
    height: "56px",
    width: "56px",
    borderRadius: "50%"
  },
  line: {
    width: "96px",
    height: "8px",
    alignSelf: "center",
    marginLeft: "16px",
    borderRadius: "8px"
  }
};
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Shimmer>
          <div className={classes.circle} />
          <div className={classes.line} />
        </Shimmer>
      </div>
    );
  }
}

export default injectSheet(StyleSheet)(App);

```

### Live Demo

![](https://media.giphy.com/media/X81Xq7aYcjWjo7iDZN/giphy.gif)

## Contributing
Feel free to send PRs. 

## License

MIT © [eTechist](https://github.com/eTechist)

