import React, { Component } from 'react';
import axios from 'axios';

import { apiConfig } from '../../apiConfig';

/** This Component shows PageC.
 * @extends Component */
class PageC extends Component {
  /**
   * @param {object} props - The props used to construct.
   */
  constructor(props) {
    super(props);
    this.state = {
      /**
       * Used to decide which subpage to show
       * 0: check in page (initial status)
       * 1: check in successful page
       */
      status: false,
    };
    this.checkIn = this.checkIn.bind(this);
    this.reset = this.reset.bind(this);
  }

  /**
   * Post the current checkIn data into backend, and switch into
   * success page if the post request succeed.
   */
  checkIn() {
    axios.post(apiConfig.sqlCheck, {
      username: this.username.value,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * switch subpage back to initial status
   */
  reset() {
    this.setState({ status: false });
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code.
   */
  render() {
    return (
      <div className="center">
        {this.state.status === false
          ?
            <div>
              PageC - CheckUserExist
              <input type="text" placeholder="帳號" ref={(input) => { this.username = input; }} />
              <button onClick={this.checkIn}>Find User</button>
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

export default PageC;
