import React, { Component } from 'react';
import Header from './header';
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
          {this.props.children}
      </div>
    );
  }
}
