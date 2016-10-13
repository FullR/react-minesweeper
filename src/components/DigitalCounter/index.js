import React, {PropTypes} from "react";
import classNames from "classnames";
import padNumber from "util/padNumber";
import "./style.css";

export default function DigitalCounter(props) {
  const {number} = props;
  const className = classNames("DigitalCounter");

  return (
    <div {...props} className={className}>
      {padNumber(number, 3)}
    </div>
  );
}

DigitalCounter.propTypes = {};
DigitalCounter.defaultProps = {};
