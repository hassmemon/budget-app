import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels';

Chart.register(ArcElement);

const data = {
    labels: ['Red', 'Blue', 'Yellow'],
};

const config = {
    data: {
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10,
            },
        ],
    },
    options: {
        cutout: 115,
    },
};

export default function Visual() {
    return (
        <div className='flex justify-content max-width-w-xs mx-auto'>
            <div className='item'>
                <div className='chart relative'>
                    <Pie {...config}></Pie>
                    <h3 className='mb-4 font-bold title'>
                        Total
                        <span className='block text-3xl text-emerald-400'>
                            $0
                        </span>
                    </h3>
                </div>
                <div classname='flex flex-col py-10 gap-4'>
                    <Labels></Labels>
                </div>
            </div>
        </div>
    );
}
