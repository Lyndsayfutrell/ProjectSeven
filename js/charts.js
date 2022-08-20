
// // function trafficChartHourly() {
// //     let trafficData = {
// //         labels: ["0-3","4-7","8-11","12-15","16-19","20-23"],
// //         datasets: [{
// //             data: [5, 20, 100, 325, 400, 150],
// //             backgroundColor: 'rgba(221, 235, 203, .5)',
// //             borderWidth: 1,
// //             }]
// //         };

// //     let trafficOptions = {
// //             backgroundColor: 'rgba(221, 235, 203 .5)',
// //             fill: true,
// //             aspectRatio: 2.5,
// //             animation: {
// //                 duration: 0
// //             },
// //             scales: {
// //                 y: {
// //                     beginAtZero: true
// //                     }
// //             },
// //             plugins: {
// //                 legend: {
// //                 display: false
// //                     }
// //                 }
// //         };
// //     let trafficChartHourly = new Chart(trafficCanvasHourly, {
// //             type: 'line',
// //             data: trafficData,
// //             options: trafficOptions
// //             });
            

// //     return trafficChartHourly;
    
// // }
// function trafficChartDaily() {
//     let trafficDataDaily = {
//         labels: ["S","M","T","W","T","F","S"],
//         datasets: [{
//             data: [5, 20, 100, 325, 400, 150, 20],
//             backgroundColor: 'rgba(221, 235, 203, .5)',
//             borderWidth: 1,
//             }]
//         };

//         let trafficOptionsDaily= {
//             backgroundColor: 'rgba(221, 235, 203 .5)',
//             fill: true,
//             aspectRatio: 2.5,
//             animation: {
//                 duration: 0
//             },
//             scales: {
//                 y: {
//                     beginAtZero: true
//                     }
//             },
//             plugins: {
//                 legend: {
//                 display: false
//                     }
//                 }
//         };
//     let trafficChartDaily = new Chart(trafficCanvasDaily, {
//             type: 'line',
//             data: trafficDataDaily,
//             options: trafficOptionsDaily
//             });
            

//     return trafficChartDaily;
    
// }


function trafficChartWeekly() {
    let trafficDataWeekly = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                2500],
            backgroundColor: 'rgba(221, 235, 203, .5)',
            borderWidth: 1,
            }]
        };

    let trafficOptionsWeekly = {
            backgroundColor: 'rgba(221, 235, 203 .5)',
            fill: true,
            aspectRatio: 2.5,
            animation: {
                duration: 0
            },
            scales: {
                y: {
                    beginAtZero: true
                    }
            },
            plugins: {
                legend: {
                display: false
                    }
                }
        };
    let trafficChartWeekly = new Chart(trafficCanvasWeekly, {
            type: 'line',
            data: trafficDataWeekly,
            options: trafficOptionsWeekly
            });
            

    return trafficChartWeekly;
    
}

// function trafficChartMonthly() {
//     let trafficDataMonthly = {
//         labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//         datasets: [{
//             data: [50000, 20000, 30000, 40000, 70000, 15000, 50000, 32000, 25000, 40000, 12000, 35000],
//             backgroundColor: 'rgba(221, 235, 203, .5)',
//             borderWidth: 1,
//             }]
//         };

//     let trafficOptionsMonthly = {
//             backgroundColor: 'rgba(221, 235, 203 .5)',
//             fill: true,
//             aspectRatio: 2.5,
//             animation: {
//                 duration: 0
//             },
//             scales: {
//                 y: {
//                     beginAtZero: true
//                     }
//             },
//             plugins: {
//                 legend: {
//                 display: false
//                     }
//                 }
//         };
//     let trafficChartMonthly = new Chart(trafficCanvasMonthly, {
//             type: 'line',
//             data: trafficDataMonthly,
//             options: trafficOptionsMonthly
//             });
//             return trafficChartMonthly;
// }
            