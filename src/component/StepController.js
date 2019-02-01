import React from "react";
import {Step} from "./Step";

export class StepController extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            steps: [],
        }
    }


    render() {
        return (
            <div className="stepController">
                <button onClick={()=>this.props.goUser()}>Retour aux utilisateurs</button>
                <h1>Etapes de résolution de {this.props.user}</h1>
                {this.renderStep()}
            </div>
        )
    }

    renderStep() {
        var res = [];
        for(let i = 0; i < this.state.steps.length; i++)
            res.push(<Step step={this.state.steps[i]}/>)
        return res;
    }

    componentDidMount() {
        const params = "a=step&u="+this.props.user;
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/getter_hanoi.php?"+params, true);
        xhttp.onload = function (e) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    this.setState({steps: JSON.parse(xhttp.responseText)});
                }else {
                    console.error(xhttp.statusText);
                }
            }
        }.bind(this);
        xhttp.onerror = function (e) {
            console.error(xhttp.statusText);
        };
        xhttp.send();
    }
}