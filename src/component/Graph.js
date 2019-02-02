import React from "react";
import {Bar} from "react-chartjs-2";

export class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }


    componentWillReceiveProps(props) {
        let nbNoLoader = 0;
        let nbLowFocus = 0;
        let nbHighFocus = 0;

        var avgNoLoader = 0;
        var avgLowFocus = 0;
        var avgHighFocus = 0;

        for (let i = 0; i < props.responses.length; i++) {
            if (props.responses[i].game_type === "-1") {
                nbNoLoader++;
                avgNoLoader += parseInt(props.responses[i][props.field]);
            } else if (props.responses[i].game_type === "0") {
                nbLowFocus++;
                avgLowFocus += parseInt(props.responses[i][props.field]);

            } else if (props.responses[i].game_type === "1") {
                nbHighFocus++;
                avgHighFocus += parseInt(props.responses[i][props.field]);
            }
        }

        avgNoLoader = avgNoLoader / nbNoLoader;
        avgLowFocus = avgLowFocus / nbLowFocus;
        avgHighFocus = avgHighFocus / nbHighFocus;
        var labels = [];
        var datas = [];
        if (props.noLoader) {
            labels = [
                'Faible focus',
                'Fort focus'
            ];
            datas = [
                avgLowFocus,
                avgHighFocus,
                0,7,
            ]
        }else {
            labels = [
                'Sans loader',
                'Faible focus',
                'Fort focus',
            ];
            datas = [
                avgNoLoader,
                avgLowFocus,
                avgHighFocus,
                0,7,
            ]

        }

        this.setState((state, props)=>({
            data: {
                labels: labels,
                datasets: [
                    {
                        label: props.title,
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: datas
                    }
                ]
            },
        }));
    }


    render() {
        return(
            <div className="Graph">
                <h3>{this.props.title}</h3>
                <Bar data={this.state.data}/>
            </div>
        );
    }
}