import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughNut() {
    const data = {
        labels: ['Direct', 'Social', 'Referral'],
        datasets: [
            {
                label: '# of Votes',
                data: [55, 15, 30],
                backgroundColor: [
                    "orange",
                    "blue",
                    "green"
                ]

                ,
            },
        ],
    };

    return <Doughnut data={data} />;
}

export default DoughNut