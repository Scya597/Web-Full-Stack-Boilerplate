import React, { Component } from 'react';

import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';
import PageIO from './PageIO';

import '../scss/style.scss';

/**
 * This Component is Only used in development stage. It switches between PageA and PageB.
 * @extends Component */
class AppForDev extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    };
    this.changeMode = this.changeMode.bind(this);
    this.renderPages = this.renderPages.bind(this);
  }

  /**
   * It changes the value of this.state.mode and used it to switch the page between PageA and PageB.
   * this.state.mode === 0 -> PageA
   * this.state.mode === 1 -> PageB
   * this.state.mode === 2 -> PageC
   * this.state.mode === 3 -> PageIO
   * @param {number} mode - the page's mode we want to switch into */
  changeMode(mode) {
    this.setState({ mode });
  }

  /**
   * render the current page of this.state.mode
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  renderPages() {
    if (this.state.mode === 0) {
      return <PageA />;
    } else if (this.state.mode === 1) {
      return <PageB />;
    } else if (this.state.mode === 2) {
      return <PageC />;
    } else {
      return <PageIO />;
    }
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be eventually compiled
   * into html code. */
  render() {
    return (
      <div>
        <button onClick={() => { this.changeMode(0); }}>PageA</button>
        <button onClick={() => { this.changeMode(1); }}>PageB</button>
        <button onClick={() => { this.changeMode(2); }}>PageC</button>
        <button onClick={() => { this.changeMode(3); }}>PageIO</button>
        {this.renderPages()}
      </div>
    );
  }
}

export default AppForDev;
