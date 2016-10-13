import React, {PropTypes} from "react";
import classNames from "classnames";
import PopBox from "components/PopBox";
import "./style.css";

export default function Minefield(props) {
  const {children} = props;
  const className = classNames("Minefield");

  return (
    <PopBox {...props} className={className} inset/>
  );
}

Minefield.propTypes = {};
Minefield.defaultProps = {};
