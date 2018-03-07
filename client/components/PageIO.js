import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import uuid from 'uuid/v1';
import { socketTask as task, setting } from '../../config-io';

/**
 * This Component shows PageIO. It demo some simple behavior of socket.io
 * @extends Component */
class PageIO extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {
      /**
       * If you deploy your app in a platform such as Google Compute Engine, you can modify
       * the endpoint to the ip where you deploy the app, and use nginx to connect port 8080
       * to that ip. */
      endpoint: setting.endpoint,
    };
    const { endpoint } = this.state;
    this.id = uuid();
    this.socket = socketIOClient(endpoint, { query: { id: this.id } });
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  /**
   * It connect socket to backend and execute some common feature of socket.io */
  connect() {
    this.socket.connect();
    this.socket.on(task.ACCEPT_DATA, (data) => {
      console.log(data);
    });
    this.socket.on(task.ACCEPT_NEW_MESSAGE, (message) => {
      console.log(message);
    });
    this.socket.emit(task.INIT);
    this.socket.emit(task.STATE_UPDATE, {
      state: 'green',
    });
    this.socket.emit(task.GET_DATA);
  }

  /**
   * It disconnect socket from backend. */
  disconnect() {
    this.socket.disconnect();
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <div>
        Socket Page
        <button onClick={this.connect}>connect</button>
        <button onClick={this.disconnect}>disconnect</button>
      </div>
    );
  }
}

export default PageIO;
