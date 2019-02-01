import React from "react";
import {User} from "./User";

export class UserController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Users",
            users: [],
            count: [],
        }
    }

    componentDidMount() {
        const params = "a=user";
        const params2 = "a=countResponse";
        const xhttp = new XMLHttpRequest();
        const xhttp2 = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/getter_hanoi.php?"+params, true);
        xhttp.onload = function (e) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    this.setState({users: JSON.parse(xhttp.responseText)});
                }else {
                    console.error(xhttp.statusText);
                }
            }
        }.bind(this);
        xhttp.onerror = function (e) {
            console.error(xhttp.statusText);
        };
        xhttp.send();

        xhttp2.open("GET", "https://unrepented-apportio.000webhostapp.com/getter_hanoi.php?"+params2, true);
        xhttp2.onload = function (e) {
            if (xhttp2.readyState === 4) {
                if (xhttp2.status === 200) {
                    this.setState({count: JSON.parse(xhttp2.responseText)});
                }else {
                    console.error(xhttp2.statusText);
                }
            }
        }.bind(this);
        xhttp2.onerror = function (e) {
            console.error(xhttp2.statusText);
        };
        xhttp2.send();
    }

    renderUser() {
        var res = [];
        for(let i = 0; i < this.state.users.length; i++) {
            res.push(<li><User user={this.state.users[i].user} steps={(user)=>this.props.goStep(user)} count={this.state.count[i]} responses={(user)=>this.props.goResponse(user)}/></li>);
        }
        return res;
    }

    render() {
        return <div className="userController">
            <h1>Liste de utilisateurs</h1>
            <p>Il y a actuellement {this.state.users.length} réponse(s)</p>
            <ul>
                {this.renderUser()}
            </ul>
        </div>
    }


}