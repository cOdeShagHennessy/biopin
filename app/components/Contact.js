import React, { Component } from 'react';
import { Link } from 'react-router';
import Text from './text'

export default class Contact extends Component {
  render() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://github.com">forums</a>.
          </p>
          <Text value="Improve This"/>
        </div>
      );
    }
  };
