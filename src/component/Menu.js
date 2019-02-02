import React from 'react'

export function Menu(props) {
    return(
        <div className="menu">
            <button onClick={()=>props.goStats()}>Voir les stats</button>
            <button onClick={() => props.goUser()}>Voir les utilisateurs</button>
        </div>
    );
}