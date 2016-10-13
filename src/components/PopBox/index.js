import React, {PropTypes} from "react";
import classNames from "classnames";
import "./style.css";

// used to create popout border effect
export default function PopBox(props) {
  const {inset, children} = props;
  const className = classNames("PopBox", props.className, {
    "PopBox--inset": inset
  });

  return (
    <div {...props} className={className}/>
  );
}

PopBox.propTypes = {
  inset: PropTypes.bool
};
