import React from "react";
import {Pie} from "react-chartjs-2";

export class MyPie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }


    componentWillReceiveProps(props) {
        var nbMoinLowFocus = 0;
        var nbPlusLowFocus = 0;
        var nbMoinHighFocus = 0;
        var nbplusHighFocus = 0;

        for (let i = 0; i < props.responses.length; i++) {
            if (props.responses[i].game_type === "0"){
                if (props.responses[i].time_long === 'plus')
                    nbPlusLowFocus++;
                else
                    nbMoinLowFocus++;
            }else{
                if (props.responses[i].time_long === 'plus')
                    nbplusHighFocus++;
                else
                    nbMoinHighFocus++;
            }

        }

        this.setState({
            data: {
                labels: [
                    'moins faible focus',
                    'plus faible focus',
                    'moins fort focus',
                    'plus fort focus',
                ],
                datasets: [{
                    data: [nbMoinLowFocus, nbPlusLowFocus, nbMoinHighFocus, nbplusHighFocus],
                    backgroundColor: [
                        '#3bffee',
                        '#1f7e73',
                        '#ff4e60',
                        '#8a2a35',
                    ],
                    hoverBackgroundColor: [
                        '#39f5e5',
                        '#1d756b',
                        '#f54b5c',
                        '#7d2630',
                    ]
                }]
            }
        })
    }

    render() {
        return(
            <div className="Pie">
                <Pie data={this.state.data}/>
            </div>
        );
    }
 }