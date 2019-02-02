import React from 'react'

export function Response(props) {
    function getGameType(game_type) {
        if(game_type === "-1") return "Sans loader";
        else if(game_type === "0") return "loader avec faible focus";
        else if(game_type === "1") return "loader avec fort focus";
    }

    return(
        <div className="response">
            <ul>
                <li><span className="elName">Nombre de clicks:</span> {props.response.clicks}</li>
                <li><span className="elName">Temps:</span> {props.response.time}</li>
                <br/>
                <li><span className="elName">Age:</span> {props.response.age}</li>
                <li><span className="elName">Genre:</span> {props.response.gender}</li>
                <li><span className="elName">Type de jeu:</span> {getGameType(props.response.game_type)}</li>
                <br/>
                <li>Globalement, comment avez-vous trouvé le jeu de la Tour de Hano&iuml;?
                    <ul>
                        <li><span className="elName">Intéret:</span> {props.response.rate_interest}</li>
                        <li><span className="elName">Simulation:</span> {props.response.rate_stimu}</li>
                    </ul>
                </li>
                <br/>
                <li>Globalement, comment avez-vous trouvé l'application en ligne qui vous a permis de jouer ?
                    <ul>
                        <li><span className="elName">Attractivité:</span> {props.response.rate_visu}</li>
                        <li><span className="elName">Complexité:</span> {props.response.rate_complexity}</li>
                        <li><span className="elName">Réactivité:</span> {props.response.rate_reactivity}</li>
                    </ul>
                </li>
                <br/>
                {props.response.game_type!==-1?
                <div className="secondPart">
                    <li><span className="elName">Combien de temps pensez-vous avoir attendu entre chaque coup ?</span> {props.response.evaluate_time}s</li>
                    <li><span className="elName">Vous attendiez-vous à attendre plus ou moins longtemps entre chaque coup ? </span>{props.response.time_long}</li>
                    <li><span className="elName">Vous &ecirc;tes-vous focalisé(e) sur ce temps d'attente ? </span>{props.response.rate_focus}</li>
                    <li><span className="elName">Avez-vous trouvé cette durée d'attente raisonnable ? </span>{props.response.rate_raisonnable}</li>
                    <li><span className="elName">Etes-vous satisfait de cette durée d'attente ? </span>{props.response.rate_time_satis}</li>
                    <li><span className="elName">Avez-vous trouvé cette durée d'attente justifiée ? </span>{props.response.rate_wait}</li>
                </div>
                    :null}
            </ul>
        </div>
    )
}