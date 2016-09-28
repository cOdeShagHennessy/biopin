import React, { Component } from 'react';
import Counter from '../components/Counter';
import {countUp, countDown} from '../actions/counterActions'
import Text from '../components/Text'

export default class CounterPage extends Component {
  render() {
    const {store} = this.context;
    return (
      <div>
        <Counter value={store.getState()}
          onInc={() => store.dispatch(countUp())}
          onDe={() => store.dispatch(countDown())}
        />
        <Text value={store.getState().counter}/>
      </div>
    );
  }
}
CounterPage.contextTypes = {
  store: React.PropTypes.object
}
