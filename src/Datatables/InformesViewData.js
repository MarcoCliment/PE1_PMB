import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.css';
import ReactDOM from 'react-dom';

import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Chart } from 'primereact/chart';

const InformesViewData = () => {
    const basicData = {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Apuestas por día',
                backgroundColor: '#6930c3',
                data: [24, 61, 31, 55, 80, 60, 70]
            },
            {
                label: 'Altas por día',
                backgroundColor: '#252525',
                data: [88, 68, 60, 89, 26, 77, 15]
            }
        ]
    };

    const getLightTheme = () => {
        let basicOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };

        
        

        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div>             
                <Chart  type="bar" data={basicData} options={basicOptions} />
       
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<InformesViewData />, rootElement);

export default InformesViewData;