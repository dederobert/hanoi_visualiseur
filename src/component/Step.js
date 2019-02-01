import React from 'react'
import {Board} from "./Board";

export function Step(props) {
    return(
        <div className="step">
            <Board towers={JSON.parse(props.step.state)}/>
        </div>
    )
}