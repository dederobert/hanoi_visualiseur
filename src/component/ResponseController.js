import React from "react";
import {Response} from "./Response";

export class ResponseController extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            responses: [],
        }
    }

    render() {
        return (
            <div className="responseController">
                <button onClick={()=>this.props.goUser()}>Retour aux utilisateurs</button>
                <h1>Réponses données par {this.props.user}</h1>
                {this.renderResponse()}
            </div>
        )
    }

    renderResponse() {
        var res = [];
        for(let i = 0; i < this.state.responses.length; i++)
            res.push(<Response response={this.state.responses[i]}/>)
        return res;
    }

    componentDidMount() {
        const params = "a=response&u="+this.props.user;
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/getter_hanoi.php?"+params, true);
        xhttp.onload = function (e) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    this.setState({responses: JSON.parse(xhttp.responseText)});
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