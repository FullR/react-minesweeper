import React, {PropTypes} from "react";
import classNames from "classnames";
import "./style.css";

export default function MinefieldRow(props) {
  const {children} = props;
  const className = classNames("MinefieldRow");

  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

MinefieldRow.propTypes = {};
MinefieldRow.defaultProps = {};
