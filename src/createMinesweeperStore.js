import {range} from "lodash";
import {createStore} from "redux";
import actions from "actions";

function minesweeperReducer(state, action) {
  if(actions.hasOwnProperty(action.type)) { // checks if handler exists for the action
    return actions[action.type](state, action);
  } else {
    console.warn(`Invalid minesweeper action: "${action.type}" (ignoring)`);
    return state;
  }
}

// create a redux store with using minesweeper reducer and an initial state generated from passed options
export default function createMinesweeperStore({width, height, mineCount}) {
  const initialState = {
    width, height, mineCount,
    minesPlaced: false,
    lost: false,
    won: false,
    startTime: null, // starts when the first cell is clicked
    endTime: null, // set when won/lost
    grid: range(0, height).map((y) => range(0, width).map((x) => { // create a 2d grid of cells
      return {
        id: `cell-${x}-${y}`,
        x, y,
        flagged: false,
        mine: false,
        revealed: false
      };
    }))
  };
  return createStore((state=initialState, action={}) => minesweeperReducer(state, action));
}
