import React,{Component} from "react";
import {Pellet} from "./Pellet";
import {isInvalid} from "./Board";

export class Tower extends Component {

    renderPellet(i) {
        if (this.props.value.includes(i))
            return <Pellet size={i} towerSize={this.props.value.length}/>
        else
            return null
    }

    render() {
        var tmp = this.props.value.map((id)=>{return this.renderPellet(id)});
        return(
            <div className="tower">
                {tmp}
                <div className="tower-name">Tour {this.props.idTower}</div>
            </div>
        )
    }
$

}