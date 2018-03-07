import React, { Component } from 'react';
import axios from 'axios';

import { apiConfig } from '../../config-api';

/**
 * This Component shows PageB.
 * @extends Component */
class PageB extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Used to decide which subpage to show
       * 0: Authentication page (initial status)
       * 1: Authentication succeed page */
      status: false,
    };
    this.authenticate = this.authenticate.bind(this);
    this.reset = this.reset.bind(this);
  }

  /**
   * Post the current authenticate data into backend, and switch into
   * succeed page if the post request succeed. */
  authenticate() {
    axios.post(apiConfig.sqlAuthenticate, {
      username: this.username.value,
      password: this.password.value,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ status: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * switch subpage back to initial status */
  reset() {
    this.setState({ status: false });
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <div className="center">
        {this.state.status === false
          ?
            <div>
              PageB - Authentication
              <input type="text" placeholder="帳號" ref={(input) => { this.username = input; }} />
              <input type="text" placeholder="密碼" ref={(input) => { this.password = input; }} />
              <button onClick={this.authenticate}>LogIn</button>
            </div>
          :
            <div>
              <button onClick={this.reset}>Go Back</button>
            </div>
        }
      </div>
    );
  }
}

export default PageB;
