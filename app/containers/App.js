require('../../less/main.less');
import React, { Component, PropTypes } from 'react';
import { Link, IndexLink} from 'react-router';
// components
import SplitPane from 'react-split-pane';
import Griddle from 'griddle-react';

export default class App extends Component {

  render() {
    const {store} = this.context;

    return (
      <div>
        <SplitPane split="vertical" minSize={600} defaultSize={600} primary="second">
            <div>
            <ul className="header">
              <li><IndexLink to="/" activeClassName='active'>Home__</IndexLink></li>
              <li><Link to="counter" activeClassName='active'>Counter</Link></li>
              <li><Link to="contact" activeClassName='active'>Contact</Link></li>
            </ul>
            </div>
            <div>
              <SplitPane split="horizontal" minSize={300} defaultSize={300} primary="second">
              <div>
                {this.props.children}
              </div>
              <div>
                <h1>Applicants</h1>
                <Griddle results={fakeData} tableClassName="table" showFilter={true}
 showSettings={true} columns={["first name","last name", "appointment time", "svc code", "city", "state", "country"]}/>
              </div>
              </SplitPane>
              </div>
        </SplitPane>
      </div>
    );
  }
}
App.propTypes = {
    children: PropTypes.element.isRequired
}
App.contextTypes = {
  store: React.PropTypes.object
}
var fakeData =  [
{
  "first name": 'sam',
  "last name": 'sam',
  "appointment time": "11:00",
  "svc code": '100',
  "city": 'no',
  "state": 'bc',
  "country": 'ca'
},
{
  "first name": 'shawn',
  "last name": 'samy',
  "appointment time": "12:45",
  "svc code": '200',
  "city": 'yes',
  "state": 'tn',
  "country": 'usa'
}
];
