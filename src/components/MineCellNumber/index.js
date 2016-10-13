import React, {PropTypes} from "react";
import classNames from "classnames";
import "./style.css";

export default function MineCellNumber(props) {
  const {number} = props;
  const className = classNames("MineCellNumber", `MineCellNumber--${number}`);

  return (
    <span {...props} className={className}>
      {number || ""}
    </span>
  );
}

MineCellNumber.propTypes = {};
MineCellNumber.defaultProps = {};
