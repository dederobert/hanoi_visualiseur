import React from "react";
import {Bubble} from "react-chartjs-2";

export class Repartition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillReceiveProps(props) {
        var datas_no = [];
        var datas_lf = props.noLoader?[{x:0,y:0.5,r:0}, {x:0,y:2,r:0}]:[{x:0,y:0,r:0}, {x:0,y:2,r:0}];
        var datas_hf = [];
        for(let i = 0; i < props.responses.length; i++) {
            var val = parseInt(props.responses[i][props.field]);
            var insert = false;

            if (!props.noLoader && props.responses[i].game_type === "-1") {
                // eslint-disable-next-line
                datas_no.forEach((value, index, array) => {
                    if (value.x === val){
                        value.r+=2;
                        insert = true;
                    }
                });
                if (!insert) datas_no.push({x: val, y: 0.5, r: 2});
            }else if (props.responses[i].game_type === "0") {
                // eslint-disable-next-line
                datas_lf.forEach((value, index, array) => {
                    if (value.x === val){
                        value.r+=2;
                        insert = true;
                    }
                });
                if (!insert) datas_lf.push({x: val, y: 1, r: 2});
            }else if (props.responses[i].game_type === "1"){
                // eslint-disable-next-line
                datas_hf.forEach((value, index, array) => {
                    if (value.x === val){
                        value.r+=2;
                        insert = true;
                    }
                });
                if (!insert) datas_hf.push({x: val, y: 1.5, r: 2});
            }
        }
        var datas = [];
        if (props.noLoader) {
            datas = [
                {
                    label: 'Faible focus',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,0,192,0.4)',
                    borderColor: 'rgba(75,0,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,0,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,0,192,1)',
                    pointHoverBorderColor: 'rgba(220,0,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas_lf,
                },
                {
                    label: 'Fort focus',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,0,0.4)',
                    borderColor: 'rgba(75,192,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,0,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,0,1)',
                    pointHoverBorderColor: 'rgba(220,220,0,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas_hf,
                },
            ]
        }else{
            datas = [
                {
                    label: 'Sans loader',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas_no,
                },
                {
                    label: 'Faible focus',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,0,192,0.4)',
                    borderColor: 'rgba(75,0,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,0,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,0,192,1)',
                    pointHoverBorderColor: 'rgba(220,0,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas_lf,
                },
                {
                    label: 'Fort focus',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,0,0.4)',
                    borderColor: 'rgba(75,192,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,0,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,0,1)',
                    pointHoverBorderColor: 'rgba(220,220,0,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: datas_hf,
                },
            ]
        }

        const data = {
            labels: props.title,
            datasets: datas,
        };

        this.setState({data: data});
    }

    render() {
        return (
            <div className="Repartition">
                <Bubble data={this.state.data} />
            </div>
        );
    }
}