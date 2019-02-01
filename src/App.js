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
          <button onClick={()=>this.goStats()}>Voir les stats</button>
          {this.state.user?<UserController goStep={(user)=>this.goStep(user)} goResponse={(user) => this.goResponse(user)}/>:null}
          {this.state.response?<ResponseController user={this.state.userId} goUser={()=>this.goUser(null)}/>:null}
          {this.state.step?<StepController user={this.state.userId} goUser={()=>this.goUser(null)}/>:null}
          {this.state.stats?<StatsController/>:null}
      </div>
    );
  }

  goStep(user) {
        this.setState({user: false, response: false, step: true, stats: false, userId: user})
  }

  goResponse(user) {
      this.setState({user: false, response: true, step: false, stats: false, userId: user})
  }

  goUser(user) {
      this.setState({user: true, response: false, step: false, stats: false, userId: user})
  }

  goStats() {
      this.setState({user: false, response: false, step: false, stats: true, userId: null})
  }
}


export default App;
