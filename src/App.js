import React, { Component } from 'react';
import "./stylesheet/main.css"
import {UserController} from "./component/UserController";
import {StepController} from "./component/StepController";
import {ResponseController} from "./component/ResponseController";
import {StatsController} from "./component/StatsController";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: true,
            response: false,
            step: false,
            stats: false,
            userId: "",
        }
    }

    render() {
    return (
      <div className="App">
          {this.state.user?<UserController goStats={()=>this.goStats()} goStep={(user)=>this.goStep(user)} goResponse={(user) => this.goResponse(user)}/>:null}
          {this.state.response?<ResponseController user={this.state.userId} goUser={()=>this.goUser()}/>:null}
          {this.state.step?<StepController user={this.state.userId} goUser={()=>this.goUser()}/>:null}
          {this.state.stats?<StatsController goUser={()=>this.goUser()}/>:null}
      </div>
    );
  }

  goStep(user) {
        this.setState({user: false, response: false, step: true, stats: false, userId: user})
  }

  goResponse(user) {
      this.setState({user: false, response: true, step: false, stats: false, userId: user})
  }

  goUser() {
      this.setState({user: true, response: false, step: false, stats: false, userId: null})
  }

  goStats() {
      this.setState({user: false, response: false, step: false, stats: true, userId: null})
  }
}


export default App;
