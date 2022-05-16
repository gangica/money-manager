import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'

const ReportChart = ({ data }) => {
    const [dataset, setDataset] = useState([]);
    const [labels, setLabels] = useState([]);

    const getLabels = (data) => {
        setLabels([...new Set(data.filter(transaction => transaction.type === "expense")
        .map(transaction => transaction.category))])
    }

    const getDataset = (data) => {
        let temp = [];
        labels.forEach(label => {
            temp.push(parseFloat(data.filter(transaction => transaction.category === label)
                .map(transaction => transaction.amount)
                .reduce((a, b) => (a += b), 0).toFixed(0)));
        })
        setDataset(temp);
    }

    const createPieChart = () => {
        const ctx = document.getElementById('pie');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: dataset.map(item => (item/dataset.reduce((a, b) => (a += b), 0)).toFixed(2)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(104, 132, 245, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(104, 132, 245, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                }]
            }, 
            options: {
                layout: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 40,
                        right: 40
                    }
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: 'white',
                        padding: 20
                    }
                }
            }
        });
    }

    const createBarChart = () => {
        const ctx = document.getElementById('bar');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: dataset,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(104, 132, 245, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(104, 132, 245, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                }]
            }, 
            options: {
                layout: {
                    padding: 40
                },
                legend: {
                    display: false,
                }
            }
        });
    }

    useEffect(() => {
        getLabels(data);
    }, [data])

    useEffect(() => {
        getDataset(data)
    }, [labels])

    useEffect(() => {
        createPieChart();
        createBarChart();
    }, [dataset])

    return (
        <div>
            <canvas id="pie" width="400" height="200" />
            <canvas id="bar" width="400" height="300" />
        </div>
    );
}

export default ReportChart;