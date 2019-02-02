import React from "react";
import {Menu} from "./Menu";
import {Graph} from "./Graph";
import {Repartition} from "./Repartition";
import {MyPie} from "./MyPie";

export class StatsController extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            responses: [],
            avg_no_loader: 0,
            avg_low_focus: 0,
            avg_high_focus: 0,
            data_avgClick: {},
            data_avgTime: {},

            data_avgInterest: {},
            data_avgStimu: {},

            data_avgVisu: {},
            data_avgReact: {},
            data_avgComp: {},
        };
    }

    componentDidMount() {
        const params = "a=response";
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://unrepented-apportio.000webhostapp.com/getter_hanoi.php?"+params, true);
        xhttp.onload = function (e) {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    this.updateResponse(JSON.parse(xhttp.responseText));
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

    updateResponse(responses) {
        this.setState({
           responses: responses,
        });
    }


    render() {
        return(
            <div className="statsController">
                <h1>Statisques Tour de Hano&iuml;</h1>
                <Menu goUser={() => this.props.goUser()} goStats={() => {}}/>
                <Graph responses={this.state.responses} title="Nombre moyen de cliques" field='clicks'/>
                <Repartition responses={this.state.responses} field="clicks"/>

                <Graph responses={this.state.responses} title="Temps moyen" field='time'/>
                <Repartition responses={this.state.responses} field="time" />

                <Graph responses={this.state.responses} title="Intér&ecirc;t moyen pour le jeu" field='rate_interest'/>
                <Repartition responses={this.state.responses} field="rate_interest" />

                <Graph responses={this.state.responses} title="Stimulation moyenne du jeu" field='rate_stimu'/>
                <Repartition responses={this.state.responses} field="rate_stimu" />


                <Graph responses={this.state.responses} title="Attrais moyen pour l'app" field='rate_visu'/>
                <Repartition responses={this.state.responses} field="rate_visu" />

                <Graph responses={this.state.responses} title="Complexité moyen de l'app" field='rate_complexity'/>
                <Repartition responses={this.state.responses} field="rate_complexity"/>

                <Graph responses={this.state.responses} title="Réactivité moyen de l'app" field='rate_reactivity'/>
                <Repartition responses={this.state.responses} field="rate_reactivity"/>

                <h2>Questions spécifique avec loader</h2>

                <Graph responses={this.state.responses} title="Estimation temps moyen" field="evaluate_time" noLoader={true}/>
                <Repartition responses={this.state.responses} field="evaluate_time" noLoader={true}/>

                <MyPie responses={this.state.responses}/>

                <Graph responses={this.state.responses} title="Focalisation moyenne" field="rate_focus" noLoader={true}/>
                <Repartition responses={this.state.responses} field="rate_focus" noLoader={true}/>

                <Graph responses={this.state.responses} title="Moyenne temps d'attente raisonnable" field="rate_raisonnable" noLoader={true}/>
                <Repartition responses={this.state.responses} field="rate_raisonnable" noLoader={true}/>

                <Graph responses={this.state.responses} title="Satisfaction moyenne temps d'attente" field="rate_time_satis" noLoader={true}/>
                <Repartition responses={this.state.responses} field="rate_time_satis" noLoader={true}/>

                <Graph responses={this.state.responses} title="Moyenne temps d'attente justifiée" field="rate_wait" noLoader={true}/>
                <Repartition responses={this.state.responses} field="rate_wait" noLoader={true}/>
            </div>
        );
    }
}
