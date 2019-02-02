import React,{Component} from "react";
import {Tower} from "./Tower";
export class Board extends Component{

    /**
     * Generate towers
     * @param i Tower's identifiant
     * @returns {*} the HTML tower
     */
    renderTower(i) {
        return(
            <Tower idTower={i} value={this.props.towers[i]}/>
        );
    }
    render() {
        return (
            <div className="board container">
                {this.renderTower(0)}
                {this.renderTower(1)}
                {this.renderTower(2)}
            </div>
        );
    }

}