import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import uuid from 'uuid/v1';
import { socketTask as task } from '../../config-io';

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'localhost:8080',
    };
    const { endpoint } = this.state;
    this.id = uuid();
    this.socket = socketIOClient(endpoint, { query: { id: this.id } });
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

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

  disconnect() {
    this.socket.disconnect();
  }

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

export default App;
