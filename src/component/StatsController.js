import React from "react";
import {Bar} from "react-chartjs-2";

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
                    this.setState({responses: JSON.parse(xhttp.responseText)});
                    this.updateAverage()
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

    updateAverage() {
        let nbNoLoader = 0;
        let nbLowFocus = 0;
        let nbHighFocus = 0;

        let avgClickNoLoader = 0;
        let avgClickLowFocus = 0;
        let avgClickHighFocus = 0;

        let avgTimeNoLoader = 0;
        let avgTimeLowFocus = 0;
        let avgTimeHighFocus = 0;

        let avgInterestNoLoader = 0;
        let avgInterestLowFocus = 0;
        let avgInterestHighFocus = 0;

        let avgStimuNoLoader = 0;
        let avgStimuLowFocus = 0;
        let avgStimuHighFocus = 0;

        let avgVisuNoLoader = 0;
        let avgVisuLowFocus = 0;
        let avgVisuHighFocus = 0;

        let avgComplexNoLoader = 0;
        let avgComplexLowFocus = 0;
        let avgComplexHighFocus = 0;

        let avgReactNoLoader = 0;
        let avgReactLowfocus = 0;
        let avgReactHighFocus = 0;

        for (let i = 0; i < this.state.responses.length; i++) {
            if (this.state.responses[i].game_type==="-1") {
                nbNoLoader++;
                avgClickNoLoader += parseInt(this.state.responses[i].clicks);
                avgTimeNoLoader += parseInt(this.state.responses[i].time);

                avgInterestNoLoader += parseInt(this.state.responses[i].rate_interest);
                avgStimuNoLoader += parseInt(this.state.responses[i].rate_stimu);

                avgVisuNoLoader += parseInt(this.state.responses[i].rate_visu);
                avgComplexNoLoader += parseInt(this.state.responses[i].rate_complexity);
                avgReactNoLoader += parseInt(this.state.responses[i].rate_reactivity);
            }else if (this.state.responses[i].game_type === "0") {
                nbLowFocus++;
                avgClickLowFocus += parseInt(this.state.responses[i].clicks);
                avgTimeLowFocus += parseInt(this.state.responses[i].time);

                avgInterestLowFocus += parseInt(this.state.responses[i].rate_interest);
                avgStimuLowFocus += parseInt(this.state.responses[i].rate_stimu);

                avgVisuLowFocus += parseInt(this.state.responses[i].rate_visu);
                avgComplexLowFocus += parseInt(this.state.responses[i].rate_complexity);
                avgReactLowfocus += parseInt(this.state.responses[i].rate_reactivity);
            }else if (this.state.responses[i].game_type === "1") {
                nbHighFocus++;
                avgClickHighFocus += parseInt(this.state.responses[i].clicks);
                avgTimeHighFocus += parseInt(this.state.responses[i].time);

                avgInterestHighFocus += parseInt(this.state.responses[i].rate_interest);
                avgStimuHighFocus += parseInt(this.state.responses[i].rate_stimu);

                avgVisuHighFocus += parseInt(this.state.responses[i].rate_visu);
                avgComplexHighFocus += parseInt(this.state.responses[i].rate_complexity);
                avgReactHighFocus += parseInt(this.state.responses[i].rate_reactivity);
            }
        }

        //MOYENNE CLICK
        avgClickNoLoader = avgClickNoLoader / nbNoLoader;
        avgClickLowFocus = avgClickLowFocus / nbLowFocus;
        avgClickHighFocus = avgClickHighFocus / nbHighFocus;

        //MOYENNE TEMPS
        avgTimeNoLoader = avgTimeNoLoader / nbNoLoader;
        avgTimeLowFocus = avgTimeLowFocus / nbNoLoader;
        avgTimeHighFocus= avgTimeHighFocus / nbNoLoader;

        //MOYENNE INTERET
        avgInterestNoLoader = avgInterestNoLoader / nbNoLoader;
        avgInterestLowFocus = avgInterestLowFocus / nbNoLoader;
        avgInterestHighFocus = avgInterestHighFocus / nbNoLoader;

        //MOYENNE STIMULATION
        avgStimuNoLoader = avgStimuNoLoader / nbNoLoader;
        avgStimuLowFocus= avgStimuLowFocus / nbNoLoader;
        avgStimuHighFocus= avgStimuHighFocus / nbNoLoader;

        //MOYENNE VISUEL
        avgVisuNoLoader = avgVisuNoLoader / nbNoLoader;
        avgVisuLowFocus = avgVisuLowFocus / nbNoLoader;
        avgVisuHighFocus = avgVisuHighFocus / nbNoLoader;

        //MOYENNE COMPLEXITE
        avgComplexNoLoader = avgComplexNoLoader / nbNoLoader;
        avgComplexLowFocus= avgComplexLowFocus/ nbNoLoader;
        avgComplexHighFocus= avgComplexHighFocus / nbNoLoader;

        //MOYENNE REACTIVITE
        avgReactNoLoader = avgReactNoLoader / nbNoLoader;
        avgReactLowfocus= avgReactLowfocus / nbNoLoader;
        avgReactHighFocus= avgReactHighFocus / nbNoLoader;

        this.setState({
            data_avgClick: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Nombre de click moyen',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgClickNoLoader, avgClickLowFocus, avgClickHighFocus,0]
                    }
                ]
            },
            data_avgTime: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Temps moyen',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgTimeNoLoader, avgTimeLowFocus, avgTimeHighFocus, 0]
                    }
                ]
            },
            data_avgInterest: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Moyenne: Jeu intéressant',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgInterestNoLoader, avgInterestLowFocus, avgInterestHighFocus, 1,7]
                    }
                ]
            },
            data_avgStimu: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Moyenne: Jeu stimulant',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgStimuNoLoader, avgStimuLowFocus, avgStimuHighFocus, 1,7]
                    }
                ]
            },
            data_avgVisu: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Moyenne: Application attrayante',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgVisuNoLoader, avgVisuLowFocus, avgVisuHighFocus, 1,7]
                    }
                ]
            },
            data_avgComp: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Moyenne: Application complexe',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgComplexNoLoader, avgComplexLowFocus, avgComplexHighFocus, 1,7]
                    }
                ]
            },
            data_avgReact: {
                labels: ['Sans loader', 'faible focus', 'fort focus'],
                datasets: [
                    {
                        label: 'Moyenne: Application réactif',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [avgReactNoLoader, avgReactLowfocus, avgReactHighFocus, 1,7]
                    }
                ]
            }
        })
    }


    render() {
        return(
            <div className="statsController">
                <h1>Statisques Tour de Hano&iuml;</h1>
                <h2>Nombre moyen de cliques</h2>
                <Bar data={this.state.data_avgClick}/>
                <h2>Temps moyen</h2>
                <Bar data={this.state.data_avgTime}/>

                <h2>Intér&ecirc;t moyen pour le jeu</h2>
                <Bar data={this.state.data_avgInterest}/>
                <h2>Stimulation moyenne du jeu</h2>
                <Bar data={this.state.data_avgStimu}/>

                <h2>Attrais moyen de l'app</h2>
                <Bar data={this.state.data_avgVisu}/>
                <h2>Compléxité moyenne de l'app</h2>
                <Bar data={this.state.data_avgComp}/>
                <h2></h2>
                <Bar data={this.state.data_avgReact}/>
            </div>
        );
    }
}