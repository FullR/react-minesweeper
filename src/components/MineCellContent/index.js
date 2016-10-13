import React, {PropTypes} from "react";
import classNames from "classnames";
import MineCellNumber from "components/MineCellNumber";

export default function MineCellContent(props) {
  const {revealed, mine, borderMineCount} = props;

  if(!mine && borderMineCount && revealed) {
    return (<MineCellNumber number={borderMineCount}/>);
  }
  return null;
}

MineCellContent.propTypes = {};
MineCellContent.defaultProps = {};
