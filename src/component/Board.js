import React,{Component} from "react";
import {Tower} from "./Tower";

const nbPellet = 4;
const nbTower = 3;

export function win(towers) {
    return (towers && towers.length === nbPellet);
}

export function isInvalid(i, tower) {
    return tower.length > 0 && i > Math.min(...tower);
}


function fillTower(nbTower, nbPellet) {
    var arr = Array.apply(null, Array(nbTower));
    arr = arr.map((x,i)=>{return []});
    arr[0] = Array.apply(null, Array(nbPellet));
    arr[0] = arr[0].map((x,i)=>{return i});
    return [[0,1,2,3,],[],[]];
}

export class Board extends Component{

    constructor(props) {
        super(props);
        this.state = {
            towers: props.towers
        };
    }

    /**
     * Generate towers
     * @param i Tower's identifiant
     * @returns {*} the HTML tower
     */
    renderTower(i) {
        return(
            <Tower idTower={i} value={this.state.towers[i]}/>
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