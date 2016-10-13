import React, {PropTypes} from "react";
import classNames from "classnames";
import Minesweeper from "components/Minesweeper";
import createMinesweeperStore from "createMinesweeperStore";
import "./style.css";

const initialWidth = 16;
const initialHeight = 16;
const initialMines = 40;

const initialStore = createMinesweeperStore({width: initialWidth, height: initialHeight, mineCount: initialMines});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = initialStore;
    this.state = {
      width: initialWidth,
      height: initialHeight,
      mineCount: initialMines,
      storeState: initialStore.getState(),
    };
  }

  componentDidMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe() {
    this.unsub = this.store.subscribe(() => this.setState({
      storeState: this.store.getState()
    }));
  }

  unsubscribe() {
    if(this.unsub) {
      this.unsub();
      this.unsub = null;
    }
  }

  updateStateInt(key, event) {
    this.setState({[key]: parseInt(event.target.value)});
  }

  reset() {
    const {width, height, mineCount} = this.state;
    this.unsubscribe();
    this.store = createMinesweeperStore({width, height, mineCount});
    this.subscribe();
    this.setState({storeState: this.store.getState()});
  }

  render() {
    const {storeState, width, height, mineCount} = this.state;
    return (
      <div className="App">
        <div className="App__game">
          <Minesweeper {...storeState} store={this.store} onReset={this.reset.bind(this)}/>
        </div>
        <div className="App__controls">
          <div>
            <label>Width</label>
            <input type="number" value={width} onChange={this.updateStateInt.bind(this, "width")} min="0" max="50"/>
          </div>
          <div>
            <label>Height</label>
            <input type="number" value={height} onChange={this.updateStateInt.bind(this, "height")} min="0" max="50"/>
          </div>
          <div>
            <label>Mines</label>
            <input type="number" value={mineCount} onChange={this.updateStateInt.bind(this, "mineCount")} min="0" max="2499"/>
          </div>
          <button onClick={this.reset.bind(this)}>Start</button>
        </div>
      </div>
    );
  }
}
