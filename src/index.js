import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classNames from "classnames";

const styles = {
  shimmer: {
    background: "#f2f2f2",
    display: "inline-block",
    backgroundImage:
      "linear-gradient(to right,#eeeeee 40%,#dddddd 50%,#eeeeee 60%)",
    backgroundSize: "800px 104px",
    backgroundRepeat: "no-repeat",
    animation: "shimmerAnim 2s infinite linear"
  },
  "@keyframes shimmerAnim": {
    "0%": {
      backgroundPosition: "-468px 0"
    },
    "100%": {
      backgroundPosition: "468px 0"
    }
  }
};

class Shimmer extends Component {
  /**
   * Appending animating shimmer class to the Shimmer component's child.
   */
  appendShimmerToChild(child) {
    const { classes } = this.props;
    return React.cloneElement(child, {
      className: classNames(child.props.className, classes.shimmer)
    });
  }

  render() {
    const { children } = this.props;
    let modifiedChildren = [];
    if (children.length > 0) {
      children.forEach(element => {
        modifiedChildren.push(this.appendShimmerToChild(element));
      });
    } else {
      modifiedChildren = this.appendShimmerToChild(children);
    }
    return <Fragment>{modifiedChildren}</Fragment>;
  }
}

Shimmer.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object
};

Shimmer.defaultProps = {
  classes: {},
  children: {}
};

export default injectSheet(styles)(Shimmer);
