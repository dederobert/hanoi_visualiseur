import React from "react";

export function Pellet(props) {
        return (
            <button type="none" className={"pellet pellet-"+props.size+" tower-"+props.towerSize}>
                {props.size}
                </button>
        )
}