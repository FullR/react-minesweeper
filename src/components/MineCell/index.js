import React, {PropTypes} from "react";
import classNames from "classnames";
import PopBox from "components/PopBox";
import "./style.css";

export default function MineCell(props) {
  const {revealed, mine, flagged, children} = props;
  const className = classNames("MineCell", {
    "MineCell--revealed": revealed,
    "MineCell--hidden": !revealed,
    "MineCell--mine": mine,
    "MineCell--flagged": flagged
  });

  return (
    <PopBox {...props} className={className}/>
  );
}

MineCell.propTypes = {};
MineCell.defaultProps = {};
